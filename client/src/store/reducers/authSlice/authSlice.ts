import {
  PayloadAction,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { IUser } from "../../../models/IUser";
import { $authHost, $host } from "../../../api";
import { jwtDecode } from "jwt-decode";
import { IToken } from "../../../models/IToken";
import axios from "axios";
import { url } from "../../../utils/baseUrl";
import { IGroup } from "../../../models/IGroup";

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = <AuthState>{
  user: {},
  group: [] as IGroup[],
  isAuth: false,
  isChecked: false,
  isLoading: false,
  error: "",
};
export const authSlice = createSliceWithThunks({
  name: "auth",
  initialState,
  reducers: (create) => ({
    setUser: create.reducer((state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    }),
    setIsAuth: create.reducer((state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    }),
    setError: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    }),
    setIsChecked: create.reducer(
      (state, { payload }: PayloadAction<boolean>) => {
        state.isChecked = payload;
      }
    ),
    setGroup: create.reducer((state, { payload }: PayloadAction<IGroup[]>) => {
      state.group = payload;
    }),

    setAsyncAuthorizate: create.asyncThunk<
      IUser,
      IUser,
      { rejectValue: string }
    >(
      async (requestParams, { rejectWithValue }) => {
        console.log(requestParams);
        try {
          const { data } = await $host.post<IToken>(
            "api/user/registration",
            requestParams
          );
          const user: IUser = jwtDecode(data.token);
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", user.email);
          return user.password === "admin"
            ? ({ ...user, role: "ADMIN" } as IUser)
            : user;
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IUser>) => {
          state.isAuth = true;
          state.user = payload!;
          const token = localStorage.getItem("token") || "";
          state.group.push({ ...payload, token });
          localStorage.setItem("group", JSON.stringify(state.group));
          state.isLoading = false;
        },
        rejected: (state, { payload }: PayloadAction<string | undefined>) => {
          state.error = payload;
          state.isLoading = false;
        },
      }
    ),

    setAsyncLogin: create.asyncThunk<
      IUser,
      IUser,
      { rejectValue: string; state: any }
    >(
      async (requestParams, { rejectWithValue, getState }) => {
        try {
          const { data } = await $host.post<IToken>(
            "api/user/login",
            requestParams
          );
          const isCheck = getState().authReducer.isChecked;
          if (isCheck) {
            localStorage.setItem("token", data.token);
          }
          const user: IUser = jwtDecode(data.token);
          localStorage.setItem("email", user.email);
          return user.password === "admin"
            ? ({ ...user, role: "ADMIN" } as IUser)
            : user;
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IUser>) => {
          state.isAuth = true;
          state.user = payload!;
          state.isLoading = false;
        },
        rejected: (state) => {
          state.error = "Проверьте данные еще раз!";
          state.isLoading = false;
        },
      }
    ),

    authenticateUserAsync: create.asyncThunk<
      IUser,
      void,
      { rejectValue: string }
    >(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await $authHost.get<IToken>("api/user/auth");
          localStorage.setItem("token", data.token);
          return jwtDecode(data.token);
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IUser>) => {
          state.isAuth = true;
          state.user = payload;
          state.isLoading = false;
        },
        rejected: (state, { payload }: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error = payload;
        },
      }
    ),

    switchUserAsync: create.asyncThunk<IToken, string, { rejectValue: string }>(
      async (token, { rejectWithValue }) => {
        try {
          const { data } = await axios.get<IToken>(
            url.REACT_APP_API_URL + "api/user/auth",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          return data;
        } catch (err) {
          return rejectWithValue(`${err}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }) => {
          localStorage.setItem("token", payload.token);
          const currUser: IUser = jwtDecode(payload.token);
          localStorage.setItem("email", currUser.email);
          state.user = jwtDecode(payload.token);
          state.isLoading = false;
        },
        rejected: (state, { payload }: PayloadAction<string | unknown>) => {
          state.isLoading = false;
          state.error = payload;
        },
      }
    ),
  }),
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
