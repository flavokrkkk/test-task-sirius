import { Modal } from "antd";
import { FC } from "react";
import Button from "../../UI/Button/Button";
import { ButtonColor, ButtonSize } from "../../../utils";
import { ModalButtonTitle, ModalWarningWrapper } from "./styles";

interface ModalWarningProps {
  isVisible: boolean;
  title: string;
  buttonTitle: string;
  setIsVisible: (value: boolean) => void;
  onClick: () => void;
}

const ModalWarning: FC<ModalWarningProps> = ({
  isVisible,
  title,
  buttonTitle,
  setIsVisible,
  onClick,
}) => {
  const handleCanselModal = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      open={isVisible}
      onCancel={handleCanselModal}
      footer={
        <ModalWarningWrapper>
          <Button
            size={ButtonSize.sm}
            color={ButtonColor.inherit}
            onClick={onClick}
          >
            {buttonTitle}
          </Button>
          <Button
            size={ButtonSize.sm}
            color={ButtonColor.inherit}
            onClick={handleCanselModal}
          >
            Отмена
          </Button>
        </ModalWarningWrapper>
      }
    >
      <ModalButtonTitle>{title}</ModalButtonTitle>
    </Modal>
  );
};

export default ModalWarning;
