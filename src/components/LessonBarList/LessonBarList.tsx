import { FC } from "react";
import { IUser } from "../../models/IUser";
import { ListWrapper, ListWrapperItem } from "./styles";

interface LessonBarListProps {
  lesson: { value: string };
  user: IUser;
  getDefiniteLess: (email: string, less: string) => number;
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
        <h5 style={{ fontSize: "16px", fontWeight: "400" }}>{lesson.value}</h5>
        <span
          style={{
            borderRadius: "100%",
            width: "50px",
            height: "50px",
            backgroundColor: "#EEEEFF",
            color: "#323854",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          {defineLess}
        </span>
      </ListWrapperItem>

      <hr />
    </ListWrapper>
  );
};

export default LessonBarList;
