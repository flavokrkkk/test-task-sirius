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

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const initialState = <AuthState>{
  user: {},
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

    setAsyncAuthorizate: create.asyncThunk<
      IUser,
      IUser,
      { rejectValue: string }
    >(
      async (requestParams, { rejectWithValue }) => {
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
  }),
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
