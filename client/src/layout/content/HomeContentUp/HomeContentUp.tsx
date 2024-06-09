import Button from "../../../components/UI/Button/Button";
import { ButtonColor, ButtonVariant } from "../../../utils";
import {
  BodyWrapper,
  BodyWrapperText,
  BunnerTitle,
  BunnerWrapper,
  HomeConteinerUp,
  HomeTimerTitle,
  HomeWrapperBunner,
  HomeWrapperTimer,
  TimerTitle,
} from "./styles";

const HomeContentUp = () => {
  return (
    <HomeConteinerUp>
      <HomeWrapperBunner>
        <BunnerWrapper>
          <BunnerTitle>До 31 декабря любой курс со скидкой 20%</BunnerTitle>
        </BunnerWrapper>
        <BodyWrapper>
          <BodyWrapperText>
            До конца года у вас есть уникальная возможность воспользоваться
            нашей новогодней скидкой 20% на любой курс!
          </BodyWrapperText>
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
          Уведомить
        </Button>
      </HomeWrapperTimer>
    </HomeConteinerUp>
  );
};

export default HomeContentUp;
