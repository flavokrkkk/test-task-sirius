import { FC } from "react";
import { IUser } from "../../models/IUser";
import {
  ListItem,
  ListWrapper,
  ListWrapperItem,
  ListWrapperTitle,
} from "./styles";

interface LessonBarListProps {
  lesson: { value: string };
  user: IUser;
  getDefiniteLess: (email: string, less: string) => number | any;
}

const LessonBarList: FC<LessonBarListProps> = ({
  lesson,
  getDefiniteLess,
  user,
}) => {
  const defineLess: number = getDefiniteLess(user.email, lesson.value);

  return (
    <ListWrapper>
      <ListWrapperItem>
        <ListWrapperTitle>{lesson.value}</ListWrapperTitle>
        <ListItem>{defineLess}</ListItem>
      </ListWrapperItem>

      <hr />
    </ListWrapper>
  );
};

export default LessonBarList;
