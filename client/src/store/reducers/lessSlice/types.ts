import { ILess } from "../../../models/ILess";

export interface LessState {
  less: ILess[];
  sortLess: ILess[];
  isAvailable: boolean;
}
