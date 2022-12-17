import { DayI } from "../../../interfaces/DayI";
import { UserI } from "../../../interfaces/UserI";

export function getAwayFromWorkInterval(yearDays: DayI[], user: UserI) {
  const filteredDays = yearDays.filter(({ awayIntervalId }) => awayIntervalId);

  let startDay: DayI = filteredDays[0];
  let endDay: DayI = filteredDays[0];

  const awayFromWorkIntervals = new Map();

  for (let i = 1; i < filteredDays.length; i++) {
    let prevDay = filteredDays[i - 1] as DayI;
    let currentDay = filteredDays[i] as DayI;

    if (prevDay.awayIntervalId === currentDay.awayIntervalId) {
      endDay = currentDay;

      if (i === filteredDays.length - 1) {
        const awayIntervalId = endDay.awayIntervalId;

        awayFromWorkIntervals.set(awayIntervalId, {
          awayIntervalId,
          user,
          startDate: startDay.date,
          endDate: endDay.date,
          type: startDay!.type,
        });
      }
    } else {
      endDay = prevDay;

      const awayIntervalId = endDay.awayIntervalId;

      awayFromWorkIntervals.set(awayIntervalId, {
        awayIntervalId,
        user,
        startDate: startDay.date,
        endDate: endDay.date,
        type: startDay!.type,
      });

      startDay = currentDay;
      endDay = currentDay;
    }
  }

  return awayFromWorkIntervals;
}
