import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { authActions } from "./authSlice";

export const AuthActionCreators = {
  setUser: authActions.setUser,
  setIsAuth: authActions.setIsAuth,
  setError: authActions.setError,

  logoutUser: () => (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      dispatch(AuthActionCreators.setUser({} as IUser));
      dispatch(AuthActionCreators.setIsAuth(false));
    } catch (error) {
      dispatch(AuthActionCreators.setError(`${error}`));
    }
  },
};
