export async function addRide(props) {
  await fetch("/api/tasks", {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getRidesByDate(date) {
  const promises = await fetch(`/api/tasks/date/${date}`);
  console.log(promises);
}
