import { FC, useState } from "react";
import WaletOrangeIcon from "../../assets/WaletOrangeIcon";
import { ILess } from "../../models/ILess";
import { LessContent, LessIcon, LessIconBlock, LessIconTitle } from "./styles";
import CrossIcon from "../../assets/CrossIcon";
import ModalWarning from "../Modal/ModalWarning/ModalWarning";
import { formatDate } from "../../utils/date";

interface LessItemProps {
  less: ILess;
  removeLess: (id: string, user: string) => void;
}

const LessItem: FC<LessItemProps> = ({ less, removeLess }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleRemoveLess = () => {
    removeLess(less.id!, less.user);
  };

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const isLastDate = formatDate(new Date()) < less.date;

  return (
    <LessContent isLastDate={isLastDate}>
      <LessIconBlock>
        <div>{less.date}</div>
        <LessIconTitle>{less.less}</LessIconTitle>
      </LessIconBlock>
      <LessIcon>
        <WaletOrangeIcon />
        <CrossIcon onClick={handleOpenModal} />
      </LessIcon>
      <ModalWarning
        isVisible={isVisible}
        title="Вы точно хотите удалить урок?"
        buttonTitle="Удалить"
        setIsVisible={setIsVisible}
        onClick={handleRemoveLess}
      />
    </LessContent>
  );
};

export default LessItem;
