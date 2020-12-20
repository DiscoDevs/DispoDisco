const { ObjectId } = require("mongodb");
const { collection } = require("./database");

async function getCollection({
  collectionName,
  name = "name",
  value = "",
  sortBy = false,
  filterBy = "name",
  filterValue = "",
  order = 1,
  company,
}) {
  const cursor = collection(collectionName).find({
    [name]: { $regex: new RegExp(value, "i") },
    [filterBy]: { $regex: new RegExp(filterValue, "i") },
    association: company,
  });
  if (sortBy) {
    cursor.sort({ [sortBy]: order });
  }
  return await cursor.toArray();
}

async function getByID({ collectionName, id }) {
  const data = await collection(collectionName).findOne(
    { _id: ObjectId(id) },
    { projection: { _id: 0 } }
  );
  return data;
}

async function getListByKey({ collectionName, key1, key2, company }) {
  const data = await collection(collectionName)
    .find({ association: company }, { projection: { [key1]: 1, [key2]: 1 } })
    .toArray();
  return data;
}

async function validateUser({ username, password }) {
  const validation = await collection("users").findOne({ username: username });
  if (validation.password === password) {
    return true;
  } else {
    return false;
  }
}

async function getCompanyName({ username }) {
  const result = await collection("users").findOne(
    { username: username },
    { projection: { _id: 0, company: 1 } }
  );
  return result;
}

async function getPictureByName({ collectionName, alias, company }) {
  const result = await collection(collectionName).findOne(
    { alias: alias, association: company },
    { projection: { _id: 0, picture: 1 } }
  );
  return result;
}

async function insertData({ collectionName, data }) {
  return await collection(collectionName).insertOne(data);
}

async function deleteData({ collectionName, id }) {
  await collection(collectionName).deleteOne({ _id: ObjectId(id) });
}

async function updateData({ collectionName, id, data }) {
  await collection(collectionName).updateOne(
    { _id: ObjectId(id) },
    { $set: data }
  );
}

exports.getCollection = getCollection;
exports.getByID = getByID;
exports.getListByKey = getListByKey;
exports.validateUser = validateUser;
exports.getPictureByName = getPictureByName;
exports.getCompanyName = getCompanyName;
exports.insertData = insertData;
exports.deleteData = deleteData;
exports.updateData = updateData;
