import { Spin } from "antd";
import LogoIcon from "../../assets/LogoIcon";
import AuthForm from "../../components/AuthForm/AuthForm";
import ModalError from "../../components/Modal/ModalError/ModalError";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector } from "../../store/selectors";
import {
  ActiveLang,
  AuthLangWrapper,
  AuthWrapper,
  FormHeader,
  FormTitle,
} from "./styles";
import { LoadingOutlined } from "@ant-design/icons";
import Container from "../../components/UI/Container/Container";
import ModalAuth from "../../components/Modal/ModalAuth/ModalAuth";
import { useState } from "react";

const AuthPage = () => {
  const { setError, setAsyncAuthorizate, setAsyncLogin } = useActions();

  const { error, isLoading } = useAppSelector(authSelector);

  const [isVisible, setIsVisible] = useState(false);

  const handleAuthorizateUser = (email: string, password: string) => {
    setAsyncLogin({ email, password });
  };

  const handleModalOpen = () => {
    setIsVisible(true);
  };

  if (isLoading) {
    <Container>
      {isLoading && (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
    </Container>;
  }

  return (
    <Container>
      <AuthWrapper>
        <div>
          <FormHeader>
            <LogoIcon />
            <FormTitle>Вход в Sirius Future</FormTitle>
          </FormHeader>
          <AuthForm
            handleAuthorizateUser={handleAuthorizateUser}
            handleModalOpen={handleModalOpen}
          />
        </div>
      </AuthWrapper>
      <AuthLangWrapper>
        <ActiveLang>RU</ActiveLang>
        <div>EN</div>
      </AuthLangWrapper>
      <>{error && <ModalError error={`${error}`} setError={setError} />}</>
      <ModalAuth
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setAsyncAuthorizate={setAsyncAuthorizate}
      />
    </Container>
  );
};

export default AuthPage;
