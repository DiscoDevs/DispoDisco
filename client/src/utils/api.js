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
      startTime: startDate,
      endTime: endDate,
      start: start,
      dest: dest,
      done: false,
      weight: weight,
      priority: priority,
      type: type,
      assignment: rider,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
