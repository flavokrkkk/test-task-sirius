export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}.${month}.${day}`;
};

export const getMonthName = (monthNumber: number) => {
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  return months[monthNumber];
};
