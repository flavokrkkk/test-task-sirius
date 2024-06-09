import { AuthActionCreators } from "../reducers/authSlice";
import { authActions } from "../reducers/authSlice/authSlice";
import { LessActionCreators } from "../reducers/lessSlice";
import { lessActions } from "../reducers/lessSlice/lessSlice";

export const AllActionCreators = {
  ...authActions,
  ...lessActions,
  ...AuthActionCreators,
  ...LessActionCreators,
};
