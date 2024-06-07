import { IMenu } from "../../models/IMenu";
import ConnectIcon from "../ConnectIcon";
import HomeIcon from "../HomeIcon";
import LessIcon from "../LessIcon";
import LibraryIcon from "../LibraryIcon";
import QuestionIcon from "../QuestionIcon";
import RecordIcon from "../RecordIcon";
import SettingIcon from "../SettingIcon";
import TrainerIcon from "../TrainerIcon";
import WaletIcon from "../WaletIcon";

export const menuItems: IMenu[] = [
  {
    id: 1,
    value: "Главная",
    svg: <HomeIcon />,
  },
  { id: 2, value: "Расписание", svg: <LessIcon /> },
  { id: 3, value: "Оплата", svg: <WaletIcon /> },
  { id: 4, value: "Достижения", svg: <RecordIcon /> },
  { id: 5, value: "Тренажеры", svg: <TrainerIcon /> },
  { id: 6, value: "Библиотека", svg: <LibraryIcon /> },
  { id: 7, value: "Проверка связи", svg: <ConnectIcon /> },
  { id: 8, value: "Настройки", svg: <SettingIcon /> },
  { id: 9, value: "Вопросы", svg: <QuestionIcon /> },
];
