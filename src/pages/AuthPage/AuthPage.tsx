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

const AuthPage = () => {
  const { setAsyncUser, setError } = useActions();

  const { error, isLoading } = useAppSelector(authSelector);

  const handleAuthorizateUser = (email: string, password: string) => {
    setAsyncUser({ email, password });
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
          <AuthForm handleAuthorizateUser={handleAuthorizateUser} />
        </div>
      </AuthWrapper>
      <AuthLangWrapper>
        <ActiveLang>RU</ActiveLang>
        <div>EN</div>
      </AuthLangWrapper>
      <>{error && <ModalError error={`${error}`} setError={setError} />}</>
    </Container>
  );
};

export default AuthPage;
