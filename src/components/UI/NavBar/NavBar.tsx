import { useState } from "react";
import ArrowIcon from "../../../assets/ArrowIcon";
import MessageIcon from "../../../assets/MessageIcon";
import UserIcon from "../../../assets/UserIcon";
import { NavBarContainer, NavBarContent } from "./styles";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { authSelector } from "../../../store/selectors";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSetIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const { logoutUser } = useActions();

  const { user } = useAppSelector(authSelector);

  return (
    <NavBarContainer>
      <NavBarContent>
        <div>
          <MessageIcon />
        </div>
        <div>
          <span onClick={handleSetIsVisible}>
            <UserIcon />
            <ArrowIcon />
          </span>
        </div>
      </NavBarContent>
      <DropDownMenu
        isVisible={isVisible}
        user={user}
        handleSetIsVisible={handleSetIsVisible}
        logoutUser={logoutUser}
      />
    </NavBarContainer>
  );
};

export default NavBar;
