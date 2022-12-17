export const months = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
] as const;

export const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
] as const;

export const awayType = (key: string) => {
  switch (key) {
    case "vacation":
      return "отпуск";
    case "sickLeave":
      return "больничный";
    case "timeOff":
      return "отгул";

    default:
      return "отсутствие";
  }
};
