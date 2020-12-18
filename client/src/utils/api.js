export async function addData({ collectionName, data }) {
  await fetch(`/api/${collectionName}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getSortedData({ collectionName, dataName }) {
  const result = await fetch(`/api/${collectionName}?sortBy=${dataName}`);
  const returnedData = await result.json();
  return returnedData;
}

export async function getSortedDataByQuery({ collectionName, type, query }) {
  const result = await fetch(`/api/${collectionName}/${type}?query=${query}`);
  const returnedData = await result.json();
  return returnedData;
}

export async function getDataByID({ collectionName, id }) {
  const result = await fetch(`/api/${collectionName}/${id}`);
  const data = await result.json();
  return data;
}

export async function getEntryList({ collectionName }) {
  const results = await fetch(`/api/${collectionName}/list`);
  const data = await results.json();
  return data;
}

export async function getRiderImage({ alias }) {
  const result = await fetch(`/api/riders/picture?alias=${alias}`);
  const data = await result.json();
  return data.picture;
}

export async function validateUser({ username, password }) {
  const result = await fetch(`/api/users/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = result.json();
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
