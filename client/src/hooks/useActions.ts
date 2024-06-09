import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./useAppDispatch";
import { AllActionCreators } from "../store/action-creators";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(AllActionCreators, dispatch);
};
