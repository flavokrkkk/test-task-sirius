import { IGroup } from "../../../models/IGroup";
import { IUser } from "../../../models/IUser";

export interface AuthState {
  user: IUser;
  isAuth: boolean;
  group: IGroup[];
  isLoading: boolean;
  isChecked: boolean;
  error: string | unknown;
}
