export async function addTour(props) {
  await fetch("/api/tasks", {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getDataByQuery({ collectionName, dataName, query }) {
  const result = await fetch(`/api/${collectionName}/${dataName}/${query}`);
  const returnedData = await result.json();
  return returnedData;
}

export async function getSortedDataByQuery({
  collectionName,
  dataName,
  query,
}) {
  const result = await fetch(
    `/api/${collectionName}?name=${dataName}&value=${query}&sortBy=${dataName}`
  );
  const returnedData = await result.json();
  return returnedData;
}

export async function getSortedData({ collectionName, dataName }) {
  const result = await fetch(`/api/${collectionName}?sortBy=${dataName}`);
  const returnedData = await result.json();
  return returnedData;
}
