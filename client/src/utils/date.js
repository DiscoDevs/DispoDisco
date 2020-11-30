export function getCurrentDate() {
  const currentDate = new Date().toLocaleString().split(", ");
  return currentDate[0];
}
