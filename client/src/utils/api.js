export async function addRide({
  title,
  start,
  dest,
  startDate,
  endDate,
  rider,
  weight,
  priority,
  type,
}) {
  await fetch("/api/tasks", {
    method: "POST",
    body: JSON.stringify({
      name: title,
      "start-time": startDate,
      "end-time": endDate,
      start: start,
      dest: dest,
      done: false,
      weight: weight,
      priority: priority,
      type: type,
      assignment: rider,
    }),
  });
}
