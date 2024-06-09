import { ITime } from "../models/ITime";

export const enum RoutesName {
  AUTH_ROUTE = "/login",
  HOME_ROUTE = "/",
  LESS_ROUTE = "/less",
}

export const enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  inherit = "inherit",
  violet = "violet",
  beige = "beige",
}

export const enum ButtonVariant {
  dashed = "dashed",
  outlined = "outlined",
}

export const enum ButtonSize {
  sm = "sm",
  md = "md",
}

//типизировать
export const options = [
  { value: "Арифметика", label: "Арифметика" },
  { value: "Программирование", label: "Программирование" },
  { value: "Скорочтение", label: "Скорочтение" },
  { value: "Английский", label: "Английский" },
];

export const lessons = [
  { value: "Арифметика" },
  { value: "Программирование" },
  { value: "Скорочтение" },
  { value: "Английский" },
];

export const optionTimes = <ITime[]>[
  { value: "9:45-10:30", label: "9:45-10:30" },
  { value: "10:30-11:15", label: "10:30-11:15" },
  { value: "11:15-12:00", label: "11:15-12:00" },
  { value: "12:00-12:45", label: "12:00-12:45" },
  { value: "13:00-13:45", label: "13:00-13:45" },
  { value: "14:00-14:45", label: "14:00-14-45" },
  { value: "14:45-15:30", label: "14:45-15:30" },
  { value: "15:30-16:15", label: "15:30-16:15" },
  { value: "16:15-17:00", label: "16:15-17:00" },
];

export const getTeacher = (less: string) => {
  const teacher = {
    Арифметика: "Белкина Инна",
    Скорочтение: "Мин Елене",
    Программирование: "Животновская Оксана",
    Английский: "Яровицын Егор",
  };
  return teacher[`${less}`];
};
