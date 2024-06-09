import { IMenu } from "../../models/IMenu";
import { RoutesName } from "../../utils";
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
    route: RoutesName.HOME_ROUTE,
  },
  {
    id: 2,
    value: "Расписание",
    svg: <LessIcon />,
    route: RoutesName.LESS_ROUTE,
  },
  { id: 3, value: "Оплата", svg: <WaletIcon />, route: "/walet" },
  { id: 4, value: "Достижения", svg: <RecordIcon />, route: "/record" },
  { id: 5, value: "Тренажеры", svg: <TrainerIcon />, route: "/trainer" },
  { id: 6, value: "Библиотека", svg: <LibraryIcon />, route: "/library" },
  { id: 7, value: "Проверка связи", svg: <ConnectIcon />, route: "/connect" },
  { id: 8, value: "Настройки", svg: <SettingIcon />, route: "/setting" },
  { id: 9, value: "Вопросы", svg: <QuestionIcon />, route: "/question" },
];
