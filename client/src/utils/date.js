export function getCurrentDateString() {
  return new Date().toISOString().substr(0, 10);
}
