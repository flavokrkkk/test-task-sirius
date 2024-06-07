import { AuthActionCreators } from "../reducers/authSlice";
import { authActions } from "../reducers/authSlice/authSlice";

export const AllActionCreators = {
  ...authActions,
  ...AuthActionCreators,
};
