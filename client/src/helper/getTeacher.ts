import { ITeacher } from "../models/ITeacher";

export const getTeacher = (less: string) => {
  const teacher = <ITeacher>{
    Арифметика: "Белкина Инна",
    Скорочтение: "Мин Елене",
    Программирование: "Животновская Оксана",
    Английский: "Яровицын Егор",
  };
  return teacher[less];
};
