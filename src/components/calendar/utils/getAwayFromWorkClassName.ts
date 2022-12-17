import { DayI } from "../../../interfaces/DayI";

export const getAwayFromWorkClassName = (day: DayI) =>
  day.type ? `day__item--${day.type}` : "";
