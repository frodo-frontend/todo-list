export const getFormattedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}년 ${month}월 ${day}일`;
};

export const getDay = (date: Date) => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"] as const;

  return daysOfWeek[date.getDay()];
};
