import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILess } from "../../../models/ILess";
import { LessState } from "./types";

const initialState = <LessState>{
  less: [],
  sortLess: [],
  isAvailable: false,
};

export const lessSlice = createSlice({
  name: "less",
  initialState,
  reducers: (create) => ({
    setLess: create.reducer((state, { payload }: PayloadAction<ILess[]>) => {
      state.less = payload;
    }),
    setSortLess: create.reducer(
      (state, { payload }: PayloadAction<ILess[]>) => {
        state.sortLess = payload;
      }
    ),
    setIsAvailable: create.reducer(
      (state, { payload }: PayloadAction<boolean>) => {
        state.isAvailable = payload;
      }
    ),
  }),
});

export const lessReducer = lessSlice.reducer;
export const lessActions = lessSlice.actions;
