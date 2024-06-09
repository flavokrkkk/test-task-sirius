import { FC, useState, useRef } from "react";
import CrossIcon from "../../assets/CrossIcon";
import LogoutIcon from "../../assets/LogoutIcon";
import {
  DropDownMenuCenter,
  DropDownMenuCenterTitle,
  DropDownMenuDown,
  Hr,
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
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector } from "../../store/selectors";
import DropDownList from "../DropDownList/DropDownList";

interface DropDownMenuProps {
  isVisible: boolean;
  user: IUser;
  setIsVisible: (active: boolean) => void;
  logoutUser: () => void;
}

const DropDownMenu: FC<DropDownMenuProps> = ({
  isVisible,
  user,
  setIsVisible,
  logoutUser,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { group } = useAppSelector(authSelector);

  const dropRef = useRef<HTMLDivElement>(null);

  const handleLogoutUser = () => {
    logoutUser();
  };

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleCloseDropDown = () => {
    setIsVisible(false);
  };

  // useEffect(() => {
  //   dropRef.current?.addEventListener("mouseout", (event: MouseEvent) => {
  //     if (!dropRef.current?.contains(event.relatedTarget as Node)) {
  //       setIsVisible(false);
  //     }
  //   });
  // }, []);

  return (
    <DropDownMenuContainer ref={dropRef}>
      <DropDownMenuContent>
        {isVisible && (
          <DropDownMenuWrapper>
            <DropDownMenuCross onClick={handleCloseDropDown}>
              <CrossIcon />
            </DropDownMenuCross>
            <DropDownMenuCenterTitle>
              <span>Смена пользователя</span>
            </DropDownMenuCenterTitle>
            <DropDownMenuCenter>
              {group.map((g) => (
                <DropDownList
                  group={g}
                  user={user}
                  setIsVisible={setIsVisible}
                />
              ))}
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
