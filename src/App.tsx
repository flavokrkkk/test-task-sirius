import { useEffect } from "react";
import { menuItems } from "./assets/MenuIcon/MenuIcon";
import AppRouter from "./components/AppRouter/AppRouter";
import Layout from "./components/UI/Layout/Layout";
import NavBar from "./components/UI/NavBar/NavBar";
import SideBar from "./components/UI/SideBar/SideBar";
import { useAppSelector } from "./hooks/useAppSelector";
import { authSelector } from "./store/selectors";
import { AppContent, LayoutContent } from "./styles/global";
import { useActions } from "./hooks/useActions";

function App() {
  const { isAuth } = useAppSelector(authSelector);

  const { checkAuthUser } = useActions();

  useEffect(() => {
    checkAuthUser();
  }, []);

  return (
    <Layout>
      {isAuth ? (
        <LayoutContent>
          <AppContent>
            <NavBar />
            <AppRouter />
          </AppContent>
          <SideBar items={menuItems} />
        </LayoutContent>
      ) : (
        <>
          <AppRouter />
        </>
      )}
    </Layout>
  );
}

export default App;
