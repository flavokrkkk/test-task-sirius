import { Input, Modal } from "antd";
import { ChangeEventHandler, FC, useState } from "react";
import Button from "../../UI/Button/Button";
import { ButtonColor, ButtonSize } from "../../../utils";
import { ModalAuthForm, ModalAuthTitle, ModalAuthWrapper } from "./styles";
import { IUser } from "../../../models/IUser";

interface ModalAuthProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  setAsyncAuthorizate: (requestParams: IUser) => void;
}

const ModalAuth: FC<ModalAuthProps> = ({
  isVisible,
  setIsVisible,
  setAsyncAuthorizate,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  const handleCanselModal = () => {
    setIsVisible(false);
  };

  const handleAsyncAuthorizate = () => {
    setAsyncAuthorizate({ email, password });
  };

  return (
    <Modal
      open={isVisible}
      onCancel={handleCanselModal}
      footer={
        <ModalAuthWrapper>
          <Button
            size={ButtonSize.sm}
            color={ButtonColor.inherit}
            onClick={handleAsyncAuthorizate}
          >
            Зарегистрироваться
          </Button>
        </ModalAuthWrapper>
      }
    >
      <ModalAuthTitle>Регистрация</ModalAuthTitle>

      <ModalAuthForm>
        <Input
          placeholder="E-mail"
          size="large"
          value={email}
          onChange={handleChangeEmail}
        />
        <Input
          placeholder="Password"
          size="large"
          value={password}
          onChange={handleChangePassword}
        />
      </ModalAuthForm>
    </Modal>
  );
};

export default ModalAuth;