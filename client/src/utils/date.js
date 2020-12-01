export function getCurrentDate() {
  const currentDate = new Date();
  const today =
    currentDate.getDate() < 10
      ? `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-0${currentDate.getDate()}`
      : `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
  return today;
}
