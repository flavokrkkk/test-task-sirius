import { FC } from "react";
import { IMenu } from "../../models/IMenu";
import { SideBarMenuContent } from "./styles";

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

  return (
    <SideBarMenuContent onClick={handleActiveNav} isActive={isActive}>
      <div>{item.svg}</div>
      <div key={item.id}>{item.value}</div>
    </SideBarMenuContent>
  );
};

export default SideBarList;
