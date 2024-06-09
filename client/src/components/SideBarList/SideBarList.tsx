import { FC } from "react";
import { IMenu } from "../../models/IMenu";
import { SideBarMenuContent, SideBarMenuContentLink } from "./styles";
import { useLocation } from "react-router-dom";

interface SideBarListProps {
  item: IMenu;
  selectedNav: IMenu;
  setSelectedNav: (active: IMenu) => void;
}

const SideBarList: FC<SideBarListProps> = ({
  item,
  setSelectedNav,
  selectedNav,
}) => {
  const { pathname } = useLocation();

  const isActive = selectedNav.id === item.id || item.route === pathname;

  const handleActiveNav = () => {
    setSelectedNav(item);
  };

  return item.route ? (
    <SideBarMenuContentLink
      isActive={isActive}
      to={item.route}
      onClick={handleActiveNav}
    >
      <div>{item.svg}</div>
      <div key={item.id}>{item.value}</div>
    </SideBarMenuContentLink>
  ) : (
    <SideBarMenuContent isActive={isActive} onClick={handleActiveNav}>
      <div>{item.svg}</div>
      <div key={item.id}>{item.value}</div>
    </SideBarMenuContent>
  );
};

export default SideBarList;
