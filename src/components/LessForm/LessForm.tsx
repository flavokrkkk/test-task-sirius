import { DatePicker, Select } from "antd";
import Button from "../UI/Button/Button";
import { ButtonSize, options } from "../../utils";
import { useAppSelector } from "../../hooks/useAppSelector";
import { authSelector } from "../../store/selectors";
import { FC, FormEventHandler, useState } from "react";
import { ILess } from "../../models/ILess";
import { Moment } from "moment";
import { formatDate } from "../../utils/date";
import { FormControl } from "./styles";

interface LessFormProps {
  createFormLess: (less: ILess) => void;
  setIsVisible: (active: boolean) => void;
}

const LessForm: FC<LessFormProps> = ({ createFormLess, setIsVisible }) => {
  const currentUser = useAppSelector(authSelector);
  const option = [
    { value: currentUser.user.email, label: currentUser.user.email },
  ];

  const [lesson, setLesson] = useState({
    id: "",
    date: "",
    less: "",
    user: "",
  } as ILess);

  const [less, setLess] = useState("Предмет");
  const [user, setUser] = useState("Пользователь");

  const [dates, setDate] = useState<Moment | null>();

  const handleSelectLess = (lessEvent: string) => {
    setLess(lessEvent);
    setLesson({ ...lesson, less: lessEvent });
  };

  const handleSelectUser = (userLess: string) => {
    setUser(userLess);
    setLesson({ ...lesson, user: userLess });
  };

  const handleSelectDate = (date: Moment | null) => {
    setDate(date!);
    if (date) {
      setLesson({
        ...lesson,
        date: formatDate(date.toDate()),
        id: `${Date.now()}`,
      });
    }
  };

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    createFormLess(lesson);
    setIsVisible(false);
    setDate(null);
  };

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
        value={user}
        options={option}
        onChange={handleSelectUser}
      />
      <Button size={ButtonSize.sm}>Добавить</Button>
    </FormControl>
  );
};

export default LessForm;
