import { Checkbox, Input } from "antd";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";
import {
  CheckboxWrapper,
  Form,
  FormLinksWrapper,
  FormLinksWrapperDown,
  Span,
} from "./styles";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector } from "../../store/selectors";

interface AuthFormProps {
  handleModalOpen: () => void;
  handleAuthorizateUser: (email: string, password: string) => void;
}

const AuthForm: FC<AuthFormProps> = ({
  handleAuthorizateUser,
  handleModalOpen,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isChecked } = useAppSelector(authSelector);

  const { setIsChecked } = useActions();

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  const handleChechBox = (event: CheckboxChangeEvent) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    handleAuthorizateUser(email, password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        size="large"
        placeholder="E-mail"
        value={email}
        onChange={handleChangeEmail}
      />
      <Input.Password
        size="large"
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
      />
      <CheckboxWrapper>
        <Checkbox checked={isChecked} onChange={handleChechBox}>
          Запомнить меня
        </Checkbox>
      </CheckboxWrapper>
      <Button>Войти</Button>
      <FormLinksWrapper>
        <span>Я забыл пароль</span>
        <NavLink to={"#"}>Войти как тренер</NavLink>
      </FormLinksWrapper>
      <FormLinksWrapperDown>
        <span>Нет аккаунта?</span>
        <Span onClick={handleModalOpen}>Зарегистрироваться</Span>
      </FormLinksWrapperDown>
    </Form>
  );
};

export default AuthForm;
