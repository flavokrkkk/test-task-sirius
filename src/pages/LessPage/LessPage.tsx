import Button from "../../components/UI/Button/Button";
import { ButtonColor, options } from "../../utils";
import {
  ButtonWrapper,
  LessContainer,
  LessSelect,
  LessUpContent,
} from "./styles.ts";
import LessCalendar from "../../components/LessCalendar/LessCalendar";
import { useEffect, useState } from "react";
import ModalLess from "../../components/Modal/ModalLess/ModalLess";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector, lessSelector } from "../../store/selectors";
import { useActions } from "../../hooks/useActions";

const LessPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [value, setValue] = useState("Выбрать предмет");

  const { user } = useAppSelector(authSelector);

  const { less } = useAppSelector(lessSelector);

  const { fetchLess, filterLess } = useActions();

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const handleSelectValue = (value: string) => {
    setValue(value);
    filterLess(value, user.email);
  };

  useEffect(() => {
    fetchLess(user.email);
    user.role === "ADMIN" && alert("Привет Админ!");
  }, []);

  return (
    <LessContainer>
      <LessUpContent>
        <LessSelect
          value={value}
          options={options}
          size="large"
          onChange={handleSelectValue}
        />
        <ButtonWrapper>
          <Button color={ButtonColor.violet} onClick={handleOpenModal}>
            Изменить расписание
          </Button>
        </ButtonWrapper>
      </LessUpContent>
      <LessCalendar less={less} />
      <ModalLess isVisible={isVisible} setIsVisible={setIsVisible} />
    </LessContainer>
  );
};

export default LessPage;
