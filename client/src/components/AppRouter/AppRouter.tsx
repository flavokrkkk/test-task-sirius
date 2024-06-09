import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import HomePage from "../../pages/HomePage/HomePage";
import AuthPage from "../../pages/AuthPage/AuthPage";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector } from "../../store/selectors";

const AppRouter = () => {
  const { isAuth } = useAppSelector(authSelector);

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(({ path, component }) => (
            <Route key={path} path={path} Component={component} />
          ))}
          <Route path="*" Component={HomePage} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, component }) => (
            <Route key={path} path={path} Component={component} />
          ))}
          <Route path="*" Component={AuthPage} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
