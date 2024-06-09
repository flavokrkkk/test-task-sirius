import { AppDispatch } from "../..";
import { ILess } from "../../../models/ILess";
import { lessActions } from "./lessSlice";

export const LessActionCreators = {
  setLess: lessActions.setLess,
  setIsAvailable: lessActions.setIsAvailable,
  setSortLess: lessActions.setSortLess,
  createFormLess: (less: ILess) => (dispatch: AppDispatch) => {
    try {
      const lesson: ILess[] = JSON.parse(
        localStorage.getItem("lesson") || "[]"
      );
      const userLess = lesson.filter((l) => l.user === less.user);
      userLess.push(less);
      lesson.push(less);
      dispatch(LessActionCreators.setLess(userLess));
      localStorage.setItem("lesson", JSON.stringify(lesson));
    } catch (err) {
      console.log(err);
    }
  },
  fetchLess: (email: string) => (dispatch: AppDispatch) => {
    try {
      console.log(email);
      const less: ILess[] = JSON.parse(localStorage.getItem("lesson") || "[]");
      const userLess = less.filter((less) => less.user === email);
      dispatch(LessActionCreators.setLess(userLess));
    } catch (err) {
      console.log(err);
    }
  },

  filterLess: (lesson: string, email: string) => (dispatch: AppDispatch) => {
    try {
      const currLess: ILess[] = JSON.parse(
        localStorage.getItem("lesson") || "[]"
      );
      const filterLess = currLess.filter(
        (less) => email === less.user && less.less === lesson
      );
      const currUserLess = currLess.filter((less) => less.user === email);
      if (lesson !== "Выбрать предмет") {
        dispatch(LessActionCreators.setLess(filterLess));
      } else {
        dispatch(LessActionCreators.setLess(currUserLess));
      }
    } catch (err) {
      console.log(err);
    }
  },

  removeLess: (id: string, email: string) => (dispatch: AppDispatch) => {
    try {
      const userLess: ILess[] = JSON.parse(
        localStorage.getItem("lesson") || "[]"
      );
      const newLess = userLess.filter((l) => l.id !== id);
      localStorage.setItem("lesson", JSON.stringify(newLess));
      const userCurrentLess = newLess.filter((l) => l.user === email);
      dispatch(LessActionCreators.setLess(userCurrentLess));
    } catch (err) {
      console.log(err);
    }
  },

  getDefiniteLess: (email: string, less: string) => () => {
    try {
      const lessons: ILess[] = JSON.parse(
        localStorage.getItem("lesson") || "[]"
      );
      const userLess = lessons.filter((l) => l.user === email);
      const definiteLess = userLess.filter((l) => l.less === less);
      return definiteLess.length;
    } catch (err) {
      console.log(err);
    }
  },

  isAvailableLess:
    (time: string, date: string, email: string) => (dispatch: AppDispatch) => {
      const lesson: ILess[] = JSON.parse(
        localStorage.getItem("lesson") || "[]"
      );
      const userLesson = lesson.filter((l) => l.user === email);
      const isAvailbaleLess = userLesson.filter(
        (l) => l.date === date && l.time === time
      );
      return isAvailbaleLess.length === 0
        ? dispatch(LessActionCreators.setIsAvailable(true))
        : dispatch(LessActionCreators.setIsAvailable(false));
    },

  setSortUserLess: (email: string) => (dispatch: AppDispatch) => {
    try {
      const userLess: ILess[] = JSON.parse(
        localStorage.getItem("lesson") || "[]"
      );
      const currLess = userLess.filter((l) => l.user === email);
      const sortLess = currLess.sort(
        (a, b) => Number(a.date.split(".")[2]) - Number(b.date.split(".")[2])
      );
      console.log(sortLess);
      dispatch(LessActionCreators.setSortLess(sortLess));
    } catch (err) {
      console.log(err);
    }
  },
};
