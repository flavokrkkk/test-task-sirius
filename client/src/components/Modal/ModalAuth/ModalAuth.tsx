import { Form, Input, Modal, Select } from "antd";
import { ChangeEventHandler, FC, useState } from "react";
import Button from "../../UI/Button/Button";
import { ButtonColor, ButtonSize, groupNumeric } from "../../../utils";
import { ModalAuthTitle, ModalAuthWrapper } from "./styles";
import { IUser } from "../../../models/IUser";
import FormItem from "antd/es/form/FormItem";

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
  const [groups, setGroups] = useState("Выбрать группу");

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPassword(event.target.value);
  };

  const handleSelectGroup = (group: string) => {
    setGroups(group);
  };

  const handleCanselModal = () => {
    setIsVisible(false);
  };

  const handleAsyncAuthorizate = () => {
    setAsyncAuthorizate({ email, password, groupId: groups });
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

      <Form>
        <FormItem>
          <Input
            placeholder="E-mail"
            size="large"
            value={email}
            onChange={handleChangeEmail}
          />
        </FormItem>

        <FormItem>
          <Input
            placeholder="Password"
            size="large"
            value={password}
            onChange={handleChangePassword}
          />
        </FormItem>

        <FormItem>
          <Select
            options={groupNumeric}
            value={groups}
            onChange={handleSelectGroup}
          />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default ModalAuth;
