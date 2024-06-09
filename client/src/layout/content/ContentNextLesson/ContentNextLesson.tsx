import { FC } from "react";
import { ContainerNextLesson, LessonTitle } from "./styles";

interface ContentNextLessonProps {
  children: React.ReactNode;
}

const ContentNextLesson: FC<ContentNextLessonProps> = ({ children }) => {
  return (
    <ContainerNextLesson>
      <LessonTitle>Ближайшие уроки</LessonTitle>

      {children}
    </ContainerNextLesson>
  );
};

export default ContentNextLesson;
