export function getCurrentDate() {
  const currentDate = new Date();
  const today =
    currentDate.getDate() < 10 && currentDate.getMonth() < 10
      ? `${currentDate.getFullYear()}-0${
          currentDate.getMonth() + 1
        }-0${currentDate.getDate()}`
      : currentDate.getDate() < 10
      ? `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-0${currentDate.getDate()}`
      : currentDate.getMonth() < 10
      ? `${currentDate.getFullYear()}-0${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`
      : `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
  return today;
}
