import { DayI } from "../../../interfaces/DayI";

import { v4 as uuidv4 } from "uuid";

export function getAwayFromWorkId(yearDays: DayI[]) {
  yearDays = [...yearDays];

  for (let i = 1; i < yearDays.length; i++) {
    let prevDay = yearDays[i - 1];
    let currentDay = yearDays[i];

    if (currentDay?.type === null) continue;

    if (prevDay?.type === currentDay?.type) {
      if (prevDay?.awayIntervalId !== undefined) {
        currentDay.awayIntervalId = prevDay.awayIntervalId;
      } else {
        const awayIntervalId = uuidv4();
        prevDay.awayIntervalId = awayIntervalId;
        currentDay.awayIntervalId = awayIntervalId;
      }
    } else {
      if (prevDay?.awayIntervalId === undefined) {
        currentDay.awayIntervalId = uuidv4();
      }
    }

    yearDays[i - 1] = prevDay;
    yearDays[i] = currentDay;
  }

  return yearDays;
}
