import { FC } from "react";
import { ILess } from "../../models/ILess";
import { getMonthName } from "../../utils/date";
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

interface LessonNextListProps {
  lesson: ILess;
}

const LessonNextList: FC<LessonNextListProps> = ({ lesson }) => {
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
          <Button size={ButtonSize.sm}>Удалить</Button>
        </LessonNextButton>
      </LessonNextListWrapper>
      <hr />
    </LessonNextListContainer>
  );
};

export default LessonNextList;
