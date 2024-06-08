import { FC, useState } from "react";
import CrossIcon from "../../assets/CrossIcon";
import LogoutIcon from "../../assets/LogoutIcon";
import UserIcon from "../../assets/UserIcon";
import {
  DropDownMenuCenter,
  DropDownMenuCenterTitle,
  DropDownMenuCenterUser,
  DropDownMenuDown,
  Hr,
  Span,
  SpanLogout,
} from "./styles";
import {
  DropDownMenuContainer,
  DropDownMenuContent,
  DropDownMenuCross,
  DropDownMenuWrapper,
} from "./styles";
import { IUser } from "../../models/IUser";
import ModalWarning from "../Modal/ModalWarning/ModalWarning";

interface DropDownMenuProps {
  isVisible: boolean;
  user: IUser;
  handleSetIsVisible: () => void;
  logoutUser: () => void;
}

const DropDownMenu: FC<DropDownMenuProps> = ({
  isVisible,
  user,
  handleSetIsVisible,
  logoutUser,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogoutUser = () => {
    logoutUser();
  };

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const userName = user.email.split("@")[0];

  const isUserActive =
    user.email === JSON.parse(localStorage.getItem("email") || "");

  return (
    <DropDownMenuContainer>
      <DropDownMenuContent>
        {isVisible && (
          <DropDownMenuWrapper>
            <DropDownMenuCross onClick={handleSetIsVisible}>
              <CrossIcon />
            </DropDownMenuCross>
            <DropDownMenuCenterTitle>
              <span>Смена пользователя</span>
            </DropDownMenuCenterTitle>
            <DropDownMenuCenter>
              <DropDownMenuCenterUser isUserActive={isUserActive}>
                <span>
                  <UserIcon />
                </span>
                <Span>{userName}</Span>
              </DropDownMenuCenterUser>
              <DropDownMenuCenterUser isUserActive={isUserActive}>
                <span>
                  <UserIcon />
                </span>
                <Span>andry121</Span>
              </DropDownMenuCenterUser>
              <Hr />
              <DropDownMenuDown>
                <SpanLogout>Выход</SpanLogout>
                <span onClick={handleModalOpen}>
                  <LogoutIcon />
                </span>
              </DropDownMenuDown>
            </DropDownMenuCenter>
          </DropDownMenuWrapper>
        )}
      </DropDownMenuContent>
      <ModalWarning
        isVisible={isModalVisible}
        title="Вы точно хотите выйти?"
        buttonTitle="Выйти"
        setIsVisible={setIsModalVisible}
        onClick={handleLogoutUser}
      />
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
