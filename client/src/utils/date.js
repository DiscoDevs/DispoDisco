export function getCurrentDate() {
  const currentDate = new Date();
  const today = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1 < 10
      ? `0${currentDate.getMonth() + 1}`
      : currentDate.getMonth() + 1
  }-${
    currentDate.getDate() < 10
      ? `0${currentDate.getDate()}`
      : currentDate.getDate()
  }`;
  return today;
}
