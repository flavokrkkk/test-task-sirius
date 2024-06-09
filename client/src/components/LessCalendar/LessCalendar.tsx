import { Calendar } from "antd";
import { ILess } from "../../models/ILess";
import { FC } from "react";
import { Moment } from "moment";
import LessItem from "../LessItem/LessItem";
import { useActions } from "../../hooks/useActions";
import { formatDate } from "../../helper/formatDate";

interface LessCalendarProps {
  less: ILess[];
}

const LessCalendar: FC<LessCalendarProps> = ({ less }) => {
  const { removeLess } = useActions();

  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayLess = less.filter((date) => date.date === formatedDate);
    return (
      <div>
        {currentDayLess.map((less) => (
          <LessItem less={less} removeLess={removeLess} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  );
};

export default LessCalendar;
