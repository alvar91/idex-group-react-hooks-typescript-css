import { DayI } from "../../../interfaces/DayI";

export function groupByMonth(days: DayI[], keyGetter: (day: DayI) => string) {
  return Object.values(
    days.reduce((acc: { [name: string]: DayI[] }, day: DayI) => {
      const key = keyGetter(day);

      if (acc[key] === undefined) {
        acc[key] = [];
      }

      acc[key].push(day);

      return acc;
    }, {})
  );
}
