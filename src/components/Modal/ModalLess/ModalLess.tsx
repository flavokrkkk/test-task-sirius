import { Modal } from "antd";
import { FC } from "react";
import LessForm from "../../LessForm/LessForm";
import { useActions } from "../../../hooks/useActions";

interface ModalLessProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const ModalLess: FC<ModalLessProps> = ({ isVisible, setIsVisible }) => {
  const handleCanselModal = () => {
    setIsVisible(false);
  };

  const { createFormLess } = useActions();

  return (
    <Modal
      open={isVisible}
      title="Добавить расписание"
      footer={null}
      onOk={handleCanselModal}
      onCancel={handleCanselModal}
    >
      <LessForm createFormLess={createFormLess} setIsVisible={setIsVisible} />
    </Modal>
  );
};

export default ModalLess;
