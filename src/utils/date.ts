export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}.${month}.${day}`;
};
