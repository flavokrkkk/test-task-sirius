import Button from "../../../components/UI/Button/Button";
import { ButtonColor, ButtonVariant } from "../../../utils";
import {
  BodyWrapper,
  BodyWrapperImage,
  BodyWrapperText,
  BunnerTitle,
  BunnerWrapper,
  HomeConteinerUp,
  HomeTimerTitle,
  HomeWrapperBunner,
  HomeWrapperTimer,
  TimerTitle,
} from "./styles";
import image from "../../../assets/7ff0089ca66213cc5b0358b6bd876890.png";

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
          <BodyWrapperImage>
            <img src={image} width={220} height={220} />
          </BodyWrapperImage>
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
