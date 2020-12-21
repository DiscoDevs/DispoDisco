export async function addData({ collectionName, data }) {
  await fetch(`/api/${collectionName}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getSortedData({ collectionName, company }) {
  const result = await fetch(`/api/${collectionName}?company=${company}`);
  const returnedData = await result.json();
  return returnedData;
}

export async function getSortedDataByQuery({
  collectionName,
  type,
  query,
  company,
}) {
  const result = await fetch(
    `/api/${collectionName}/${type}?query=${query}&company=${company}`
  );
  const returnedData = await result.json();
  return returnedData;
}

export async function getDataByID({ collectionName, id }) {
  const result = await fetch(`/api/${collectionName}/${id}`);
  const data = await result.json();
  return data;
}

export async function getEntryList({ collectionName, company }) {
  const results = await fetch(`/api/${collectionName}/list?company=${company}`);
  const data = await results.json();
  return data;
}

export async function getRiderImage({ alias, company }) {
  const result = await fetch(
    `/api/riders/picture?alias=${alias}&company=${company}`
  );
  const data = await result.json();
  return data.picture;
}

export async function registerNewUser({ username, password, company, hash }) {
  await fetch("/api/users/register", {
    method: "POST",
    body: JSON.stringify({ username, password, company, hash }),
    headers: {
      "Content-Type": "application/json",
    },
  });
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

export async function getCompanyName({ username }) {
  const result = await fetch(`/api/users/company`, {
    method: "POST",
    body: JSON.stringify({ username }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  return data.company;
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
