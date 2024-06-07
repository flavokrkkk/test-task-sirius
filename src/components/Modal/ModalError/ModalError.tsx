import { Modal } from "antd";
import { FC, useEffect, useState } from "react";

interface ModalErrorProps {
  error: string | unknown;
  setError: (error: string) => void;
}

const ModalError: FC<ModalErrorProps> = ({ error, setError }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleCloseModal = () => {
    setIsVisible(false);
    setError("");
  };

  useEffect(() => {
    if (error) {
      setIsVisible(true);
    }
  }, []);

  return (
    <Modal
      title="Basic Modal"
      open={isVisible}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
    >
      <h2>{`${error}`}</h2>
    </Modal>
  );
};

export default ModalError;
