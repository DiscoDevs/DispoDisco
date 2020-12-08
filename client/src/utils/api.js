export async function addData(collection, data) {
  await fetch(`/api/${collection}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getDataByQuery({ collectionName, dataName, query }) {
  const result = await fetch(
    `/api/${collectionName}?name=${dataName}&value=${query}`
  );
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

export async function getDataByID({ collectionName, id }) {
  const result = await fetch(`/api/${collectionName}/${id}`);
  const data = await result.json();
  return data;
}

export async function deleteData({ collectionName, id }) {
  await fetch(`/api/${collectionName}?id=${id}`, {
    method: "DELETE",
  });
  console.log(`/api/${collectionName}?id=${id}`);
}

export async function updateData({ collectionName, id }, props) {
  await fetch(`/api/${collectionName}?id=${id}`, {
    method: "PATCH",
    body: JSON.stringify(props),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
