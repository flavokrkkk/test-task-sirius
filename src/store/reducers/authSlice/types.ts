import { IUser } from "../../../models/IUser";

export interface AuthState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  error: string | unknown;
}
