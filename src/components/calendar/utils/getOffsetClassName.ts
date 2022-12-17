export function getOffsetClassName(offset: number) {
  switch (offset) {
    case 1:
      return "row-start-2";
    case 2:
      return "row-start-3";
    case 3:
      return "row-start-4";
    case 4:
      return "row-start-5";
    case 5:
      return "row-start-6";
    case 6:
      return "row-start-7";
    default:
      return "";
  }
}
