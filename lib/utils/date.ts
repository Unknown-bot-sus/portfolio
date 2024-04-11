import { MONTHS } from "../constants/months";

export const getMonth = (date: Date) => {
  return MONTHS[date.getMonth()];
};

export const formatDate = (date: Date) => {
  return getMonth(date) + " " + date.getFullYear();
};
