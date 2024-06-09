import { useEffect } from "react";
import { menuItems } from "./assets/MenuIcon/MenuIcon";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/UI/NavBar/NavBar";
import SideBar from "./components/UI/SideBar/SideBar";
import { useAppSelector } from "./hooks/useAppSelector";
import { authSelector } from "./store/selectors";
import { AppContent, LayoutContent } from "./styles/global";
import { useActions } from "./hooks/useActions";
import Layout from "./layout/layout/Layout";

function App() {
  const { isAuth } = useAppSelector(authSelector);

  const { authenticateUserAsync } = useActions();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authenticateUserAsync();
    }
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
