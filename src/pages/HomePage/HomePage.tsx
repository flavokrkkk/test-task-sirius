import LessonBarList from "../../components/LessonBarList/LessonBarList";
import Button from "../../components/UI/Button/Button";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector } from "../../store/selectors";
import { ButtonColor, ButtonVariant, lessons } from "../../utils";
import {
  BodyWrapper,
  BunnerTitle,
  BunnerWrapper,
  HomeContainer,
  HomeContentUp,
  HomeWrapperBunner,
  HomeWrapperTimer,
  HomeTimerTitle,
  TimerTitle,
  HomeWrapperLesson,
  ContentLesson,
  LessonTitle,
} from "./styles";

const HomePage = () => {
  const { user } = useAppSelector(authSelector);

  const { getDefiniteLess } = useActions();

  return (
    <HomeContainer>
      <HomeContentUp>
        <HomeWrapperBunner>
          <BunnerWrapper>
            <BunnerTitle>До 31 декабря любой курс со скидкой 20%</BunnerTitle>
          </BunnerWrapper>
          <BodyWrapper>
            <p>
              До конца года у вас есть уникальная возможность воспользоваться
              нашей новогодней скидкой 20% на любой курс!
            </p>
          </BodyWrapper>
        </HomeWrapperBunner>

        <HomeWrapperTimer>
          <div>
            <HomeTimerTitle>Следующее занятие начнется через:</HomeTimerTitle>
          </div>
          <div>
            <TimerTitle>6д 12ч 24м</TimerTitle>
          </div>
          <Button color={ButtonColor.beige} variant={ButtonVariant.dashed}>
            Button
          </Button>
        </HomeWrapperTimer>
      </HomeContentUp>

      <HomeWrapperLesson>
        <ContentLesson>
          <LessonTitle>Баланс занятий</LessonTitle>
          <div>
            {lessons.map((lesson) => (
              <LessonBarList
                lesson={lesson}
                user={user}
                getDefiniteLess={getDefiniteLess}
              />
            ))}
          </div>
          <Button color={ButtonColor.violet}>Расписание</Button>
        </ContentLesson>

        <div>
          <h2>Ближайшие уроки</h2>
        </div>
      </HomeWrapperLesson>
    </HomeContainer>
  );
};

export default HomePage;
