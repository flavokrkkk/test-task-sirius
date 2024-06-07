import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { authActions } from "./authSlice";

export const AuthActionCreators = {
  setUser: authActions.setUser,
  setIsAuth: authActions.setIsAuth,
  setError: authActions.setError,

  logoutUser: () => (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem("auth");
      localStorage.removeItem("email");
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));
    } catch (error) {
      dispatch(AuthActionCreators.setError(`${error}`));
    }
  },

  checkAuthUser: () => (dispatch: AppDispatch) => {
    try {
      if (localStorage.getItem("auth")) {
        const isBool = localStorage.getItem("auth");
        const userEmail = JSON.parse(localStorage.getItem("email") || "");
        if (isBool) {
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setUser({ email: userEmail } as IUser));
        }
      }
    } catch (error) {
      dispatch(AuthActionCreators.setError(`${error}`));
    }
  },
};
