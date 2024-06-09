import { DatePicker, Select } from "antd";
import Button from "../UI/Button/Button";
import { ButtonSize, optionTimes, options } from "../../utils";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector, lessSelector } from "../../store/selectors";
import { FC, FormEventHandler, useEffect, useState } from "react";
import { ILess } from "../../models/ILess";
import { Moment } from "moment";
import { FormControl } from "./styles";
import { useActions } from "../../hooks/useActions";
import ModalWarning from "../Modal/ModalWarning/ModalWarning";
import { formatDate } from "../../helper/formatDate";
import { getTeacher } from "../../helper/getTeacher";

interface LessFormProps {
  createFormLess: (less: ILess) => void;
  setIsVisible: (active: boolean) => void;
}

const LessForm: FC<LessFormProps> = ({ createFormLess, setIsVisible }) => {
  const currentUser = useAppSelector(authSelector);
  const { isAvailable } = useAppSelector(lessSelector);
  const { isAvailableLess } = useActions();

  const [isModalAvailable, setIsModalAvailable] = useState(false);

  const option = [
    { value: currentUser.user.email, label: currentUser.user.email },
  ];

  const [lesson, setLesson] = useState({
    id: "",
    date: "",
    less: "",
    user: "",
    time: "",
  } as ILess);

  const [less, setLess] = useState("Предмет");
  const [user, setUser] = useState("Пользователь");
  const [times, setTimes] = useState("Время урока");
  const [dates, setDates] = useState<Moment | null>();

  const handleSelectLess = (lessEvent: string) => {
    setLess(lessEvent);
    setLesson({ ...lesson, less: lessEvent });
  };

  const handleSelectUser = (userLess: string) => {
    setUser(userLess);
    setLesson({ ...lesson, user: userLess });
  };
  const handleSelectTime = (times: string) => {
    setTimes(times);
    setLesson({ ...lesson, time: times });
  };

  const handleSelectDate = (date: Moment | null) => {
    setDates(date!);
    if (date) {
      setLesson({
        ...lesson,
        date: formatDate(date.toDate()),
        id: `${Date.now()}`,
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalAvailable(false);
  };

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (isAvailable) {
      createFormLess({ ...lesson, teacher: getTeacher(less) });
      setIsVisible(false);
      setDates(null);
      setTimes("Время урока");
      setUser("Пользователь");
      setLess("Предмет");
    } else {
      setIsModalAvailable(true);
    }
  };

  useEffect(() => {
    isAvailableLess(times, lesson.date, lesson.user);
  }, [handleSelectTime]);

  return (
    <FormControl onSubmit={onSubmit}>
      <DatePicker
        size="large"
        placeholder="Дата урока"
        name="date"
        value={dates}
        onChange={handleSelectDate}
      />
      <Select
        size="large"
        value={less}
        options={options}
        onChange={handleSelectLess}
      />
      <Select
        size="large"
        options={optionTimes}
        value={times}
        onChange={handleSelectTime}
      />
      <Select
        size="large"
        value={user}
        options={option}
        onChange={handleSelectUser}
      />
      <Button size={ButtonSize.sm}>Добавить</Button>
      <ModalWarning
        isVisible={isModalAvailable}
        buttonTitle="Вернуться"
        title="Урок на выбранную дату существует"
        onClick={handleCloseModal}
        setIsVisible={setIsModalAvailable}
      />
    </FormControl>
  );
};

export default LessForm;
