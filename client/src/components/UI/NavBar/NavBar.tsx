import { useState } from "react";
import ArrowIcon from "../../../assets/ArrowIcon";
import MessageIcon from "../../../assets/MessageIcon";
import UserIcon from "../../../assets/UserIcon";
import {
  NavBarContainer,
  NavBarContent,
  NavBarContentProfile,
  NavBarTitle,
  Span,
} from "./styles";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import { useActions } from "../../../hooks/useActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { authSelector } from "../../../store/selectors";
import { useLocation } from "react-router-dom";
import { RoutesName } from "../../../utils";
import { formatName } from "../../../helper/formatName";

const NavBar = () => {
  const { user } = useAppSelector(authSelector);

  const { logoutUser } = useActions();

  const [isVisible, setIsVisible] = useState(false);

  const { pathname } = useLocation();

  const isPathName = pathname === RoutesName.HOME_ROUTE;

  const handleSetIsVisible = () => {
    setIsVisible(true);
  };

  return (
    <NavBarContainer>
      <NavBarContent isPathName={isPathName}>
        {isPathName && (
          <NavBarTitle>
            Добро пожаловать, <Span>{formatName(user)}</Span>!
          </NavBarTitle>
        )}

        <NavBarContentProfile>
          <div>
            <MessageIcon />
          </div>
          <div>
            <span onClick={handleSetIsVisible}>
              <UserIcon />
              <ArrowIcon />
            </span>
          </div>
        </NavBarContentProfile>
      </NavBarContent>

      <DropDownMenu
        isVisible={isVisible}
        user={user}
        setIsVisible={setIsVisible}
        logoutUser={logoutUser}
      />
    </NavBarContainer>
  );
};

export default NavBar;
