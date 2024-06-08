import { FC } from "react";
import { IMenu } from "../../models/IMenu";
import { SideBarMenuContent, SideBarMenuContentLink } from "./styles";

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
  const isActive = selectedNav.id === item.id;

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
