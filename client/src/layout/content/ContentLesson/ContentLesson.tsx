import { FC } from "react";
import { ContainerLesson, LessonTitle } from "./styles";

interface ContentLessonProps {
  children: React.ReactNode;
}

const ContentLesson: FC<ContentLessonProps> = ({ children }) => {
  return (
    <ContainerLesson>
      <LessonTitle>Баланс занятий</LessonTitle>
      {children}
    </ContainerLesson>
  );
};

export default ContentLesson;
