import {
  PayloadAction,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { IUser } from "../../../models/IUser";
import axios from "axios";

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
    setAsyncUser: create.asyncThunk<
      IUser | undefined,
      IUser,
      { rejectValue: string; state: any }
    >(
      async (requestParams, { rejectWithValue, getState }) => {
        try {
          const { data } = await axios.get<IUser[]>("/users.json");
          const isCheck = getState().authReducer.isChecked;
          const user = data.find(
            (user) =>
              user.email === requestParams.email &&
              user.password === requestParams.password
          );
          if (user) {
            if (isCheck) {
              localStorage.setItem("auth", "true");
            }
            localStorage.setItem("email", JSON.stringify(user.email));

            return user.password === "admin"
              ? ({ ...user, role: "ADMIN" } as IUser)
              : user;
          } else {
            return rejectWithValue(`Пользователь не найден!`);
          }
        } catch (error) {
          return rejectWithValue(`${error}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }: PayloadAction<IUser | undefined>) => {
          state.user = payload!;
          state.isAuth = true;
        },
        rejected: (state, { payload }: PayloadAction<string | unknown>) => {
          state.error = payload;
          state.isLoading = false;
        },
      }
    ),
  }),
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
