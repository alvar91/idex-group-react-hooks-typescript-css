import { UserI } from "../../../interfaces/UserI";
import { DayI } from "../../../interfaces/DayI";

export function getAwayFromWorkType(
  calendar: DayI[][],
  { awayFromWorkTime }: UserI
): DayI[] {
  const yearDays = calendar.flat();

  return yearDays.map((day) => {
    const result = awayFromWorkTime.find(
      ({ startAwayTime, endAwayTime }) =>
        day.date >= startAwayTime && day.date <= endAwayTime
    );

    if (result) {
      day.type = result?.type;
    }

    return day;
  });
}
