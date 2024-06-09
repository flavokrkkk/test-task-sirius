import { useNavigate } from "react-router-dom";
import LessonBarList from "../../components/LessonBarList/LessonBarList";
import Button from "../../components/UI/Button/Button";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector, lessSelector } from "../../store/selectors";
import { ButtonColor, RoutesName, lessons } from "../../utils";
import { ButtonContainer, HomeContainer, ButtonWrapper } from "./styles";
import { useEffect } from "react";
import LessonNextList from "../../components/LessonNextList/LessonNextList";
import HomeContentUp from "../../layout/content/HomeContentUp/HomeContentUp";
import HomeContentDown from "../../layout/content/HomeContentDown/HomeContentDown";
import ContentLesson from "../../layout/content/ContentLesson/ContentLesson";
import ContentNextLesson from "../../layout/content/ContentNextLesson/ContentNextLesson";

const HomePage = () => {
  const { user } = useAppSelector(authSelector);

  const { sortLess } = useAppSelector(lessSelector);

  const { fetchLess, setSortUserLess } = useActions();

  const { getDefiniteLess, groupForUser } = useActions();

  const navigate = useNavigate();

  const handleNavigationToLess = () => {
    navigate(RoutesName.LESS_ROUTE);
  };

  const currentDate = new Date().getDate();

  useEffect(() => {
    fetchLess(user.email);
    setSortUserLess(user.email);
    groupForUser(user.groupId!);
  }, []);

  return (
    <HomeContainer>
      <HomeContentUp />
      <HomeContentDown>
        <ContentLesson>
          <div>
            {lessons.map((lesson, index) => (
              <LessonBarList
                key={index}
                lesson={lesson}
                user={user}
                getDefiniteLess={getDefiniteLess}
              />
            ))}
          </div>

          <div>
            <Button color={ButtonColor.violet} onClick={handleNavigationToLess}>
              Расписание
            </Button>
          </div>
        </ContentLesson>
        <ContentNextLesson>
          <div>
            {sortLess.map((lesson) => (
              <>
                {Number(lesson.date.split(".")[2]) - 12 < currentDate && (
                  <LessonNextList lesson={lesson} />
                )}
              </>
            ))}
          </div>
          <ButtonContainer>
            <ButtonWrapper>
              <Button>Button</Button>
            </ButtonWrapper>
          </ButtonContainer>
        </ContentNextLesson>
      </HomeContentDown>
    </HomeContainer>
  );
};

export default HomePage;
