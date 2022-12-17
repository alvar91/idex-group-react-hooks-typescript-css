export function getRestDayClassName(
  {
    date,
  }: {
    value: number;
    date: Date;
  },
  year: number
) {
  const lastDay = new Date(year, 12, 0, 23, 59, 59);
  return date >= new Date() && date <= lastDay ? "day__item--rest" : "";
}
