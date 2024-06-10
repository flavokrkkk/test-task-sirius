import { FC, useState } from "react";
import LogoIcon from "../../../assets/LogoIcon";
import { IMenu } from "../../../models/IMenu";
import {
  SideBarCenterContent,
  SideBarContainer,
  SideBarDownContent,
  SideBarDownContentBody,
  SideBarDownContentFooter,
  SideBarDownContentImage,
  SideBarDownContentTitle,
  SideBarUpContent,
} from "./styles";
import SideBarList from "../../SideBarList/SideBarList";
import Button from "../Button/Button";
import { ButtonColor } from "../../../utils";
import GiftIcon from "../../../assets/GiftIcon";

interface SideBarProps {
  items: IMenu[];
}

const SideBar: FC<SideBarProps> = ({ items }) => {
  const [selectedNav, setSelectedNav] = useState<IMenu>({} as IMenu);

  return (
    <SideBarContainer>
      <SideBarUpContent>
        <div>
          <LogoIcon />
        </div>
        <div>
          <h2>Sirius Future</h2>
        </div>
      </SideBarUpContent>
      <SideBarCenterContent>
        {items.map((item) => (
          <SideBarList
            key={item.id}
            item={item}
            selectedNav={selectedNav}
            setSelectedNav={setSelectedNav}
          />
        ))}
      </SideBarCenterContent>

      <SideBarDownContent>
        <SideBarDownContentTitle>Учитесь бесплатно</SideBarDownContentTitle>
        <SideBarDownContentBody>
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </SideBarDownContentBody>

        <SideBarDownContentFooter>
          <div>
            <Button color={ButtonColor.inherit}>Узнать</Button>
          </div>

          <SideBarDownContentImage>
            <GiftIcon />
          </SideBarDownContentImage>
        </SideBarDownContentFooter>
      </SideBarDownContent>
    </SideBarContainer>
  );
};

export default SideBar;
