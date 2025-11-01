import dayjs from "dayjs";

export const formatDate = (date: string | Date): string => {
  return dayjs(date).format("MMM DD, YYYY");
};

export const getDurationDays = (start: string, end: string): number => {
  const s = dayjs(start);
  const e = dayjs(end);
  return e.diff(s, "day") + 1;
};
