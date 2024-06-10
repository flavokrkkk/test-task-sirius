import { FC, useState } from "react";
import { ILess } from "../../models/ILess";
import Button from "../UI/Button/Button";
import { ButtonSize } from "../../utils";
import {
  LessonNextButton,
  LessonNextListContainer,
  LessonNextListDate,
  LessonNextListWrapper,
  SpanDay,
  SpanMonth,
} from "./styles";
import { getMonthName } from "../../helper/getMonthName";
import { useActions } from "../../hooks/useActions";
import { IUser } from "../../models/IUser";
import ModalWarning from "../Modal/ModalWarning/ModalWarning";

interface LessonNextListProps {
  lesson: ILess;
  user: IUser;
}

const LessonNextList: FC<LessonNextListProps> = ({ lesson, user }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { removeLess } = useActions();

  const handleRemoveLesson = () => {
    removeLess(lesson.id!, user.email);
  };

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const day =
    lesson.date.split(".")[2][0] === "0"
      ? lesson.date.split(".")[2].slice(1)
      : lesson.date.split(".")[2];

  return (
    <LessonNextListContainer>
      <LessonNextListWrapper>
        <LessonNextListDate>
          <SpanDay>{day}</SpanDay>
          <SpanMonth>
            {getMonthName(Number(lesson.date.split(".")[1].slice(1)))}
          </SpanMonth>
        </LessonNextListDate>

        <span>{lesson.less}</span>
        <span>{lesson.teacher}</span>
        <LessonNextButton>
          <Button size={ButtonSize.sm}>Перенести</Button>
          <Button size={ButtonSize.sm} onClick={handleOpenModal}>
            Удалить
          </Button>
        </LessonNextButton>
      </LessonNextListWrapper>
      <hr />
      <ModalWarning
        isVisible={isVisible}
        title="Подтвердите удаление"
        buttonTitle="Удалить"
        onClick={handleRemoveLesson}
        setIsVisible={setIsVisible}
      />
    </LessonNextListContainer>
  );
};

export default LessonNextList;
