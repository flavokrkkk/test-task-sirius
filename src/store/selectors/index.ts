import { RootState } from "..";

export const authSelector = (state: RootState) => state.authReducer;

export const lessSelector = (state: RootState) => state.lessReducer;
