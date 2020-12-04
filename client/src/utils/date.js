export function getCurrentDateString() {
  return new Date().toISOString().substr(0, 10);
}
export function getCurrentDateShort() {
  return new Date().toLocaleDateString().substr(0, 7);
}
