export function add30Minutes(start) {
  const time = new Date(new Date(start).getTime() + 1800000);
  return time;
}

export function add90Minutes(start) {
  const time = new Date(new Date(start).getTime() + 5400000);
  return time;
}
