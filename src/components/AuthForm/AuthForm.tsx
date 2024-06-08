import { Checkbox, Input } from "antd";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";
import {
  CheckboxWrapper,
  Form,
  FormLinksWrapper,
  FormLinksWrapperDown,
} from "./styles";
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector } from "../../store/selectors";

interface AuthFormProps {
  handleAuthorizateUser: (email: string, password: string) => void;
}

const AuthForm: FC<AuthFormProps> = ({ handleAuthorizateUser }) => {
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
        <NavLink to={"#"}>Я забыл пароль</NavLink>
        <NavLink to={"#"}>Войти как тренер</NavLink>
      </FormLinksWrapper>
      <FormLinksWrapperDown>
        <span>Нет аккаунта?</span>
        <span>
          <a>Зарегистрироваться</a>
        </span>
      </FormLinksWrapperDown>
    </Form>
  );
};

export default AuthForm;
