import { IRoute } from "../models/IRoute";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { RoutesName } from "../utils";

export const publicRoutes = <IRoute[]>[
  {
    path: RoutesName.AUTH_ROUTE,
    component: AuthPage,
  },
];

export const privateRoutes = <IRoute[]>[
  {
    path: RoutesName.HOME_ROUTE,
    component: HomePage,
  },
  {
    path: RoutesName.PROFILE_ROUTE,
    component: ProfilePage,
  },
];
