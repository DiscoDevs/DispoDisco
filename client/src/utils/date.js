export function getCurrentDateString() {
  return new Date().toISOString().substr(0, 10);
}

export function getCurrentDateShort() {
  return new Date().toLocaleDateString("de-DE", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
}
