export function getCurrentDate() {
  const currentDate = new Date();
  // Following code is super hacky, gonna be changed, just needed it to work for now.
  // Need fixed format for currentDate to be able to read data from database.
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
