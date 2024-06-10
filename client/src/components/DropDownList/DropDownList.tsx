import { FC, useEffect, useState } from "react";
import UserIcon from "../../assets/UserIcon";
import { DropDownMenuCenterUser, Span } from "./styles";
import { IUser } from "../../models/IUser";
import { useActions } from "../../hooks/useActions";
import ModalWarning from "../Modal/ModalWarning/ModalWarning";
import { IGroup } from "../../models/IGroup";

interface DropDownMenuProps {
  group: IGroup;
  user: IUser;
  setIsVisible: (active: boolean) => void;
}

const DropDownList: FC<DropDownMenuProps> = ({ group, user, setIsVisible }) => {
  const isUserActive = group.email === user.email;

  const { authenticateUserAsync, fetchLess, setSortUserLess, switchUserAsync } =
    useActions();

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleAsyncNextUser = () => {
    if (group.token) {
      switchUserAsync(group.token);
      setIsVisibleModal(false);
      setIsVisible(false);
    }
  };

  const handleOpenModal = () => {
    setIsVisibleModal(true);
  };

  useEffect(() => {
    fetchLess(user.email);
    setSortUserLess(user.email);
    authenticateUserAsync();
  }, [user.email]);

  return (
    <>
      <DropDownMenuCenterUser
        isUserActive={isUserActive}
        onClick={handleOpenModal}
      >
        <span>
          <UserIcon />
        </span>
        <Span>{group.email}</Span>
      </DropDownMenuCenterUser>
      <ModalWarning
        isVisible={isVisibleModal}
        title="Подтвердите переключение"
        buttonTitle="Подтверждаю"
        onClick={handleAsyncNextUser}
        setIsVisible={setIsVisibleModal}
      />
    </>
  );
};

export default DropDownList;
