export const datesSubtract = (startDate: Date, endDate: Date) => {
  const diffTime = Math.abs(endDate.valueOf() - startDate.valueOf());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
