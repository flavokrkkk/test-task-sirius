import { AppDispatch } from "../..";
import { IGroup } from "../../../models/IGroup";
import { IUser } from "../../../models/IUser";
import { authActions } from "./authSlice";

export const AuthActionCreators = {
  setUser: authActions.setUser,
  setIsAuth: authActions.setIsAuth,
  setError: authActions.setError,
  setGroup: authActions.setGroup,

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

  groupForUser: (id: string) => (dispatch: AppDispatch) => {
    try {
      const group: IGroup[] = JSON.parse(localStorage.getItem("group") || "[]");
      const currGroup = group.filter((group) => group.groupId === id);
      dispatch(AuthActionCreators.setGroup(currGroup));
    } catch (error) {
      console.log(error);
    }
  },
};
