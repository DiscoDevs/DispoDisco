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
}) {
  const cursor = collection(collectionName).find({
    [name]: { $regex: new RegExp(value, "i") },
    [filterBy]: { $regex: new RegExp(filterValue, "i") },
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

async function getDataByQuery({ collectionName, key }) {
  const data = await collection(collectionName)
    .find({}, { projection: { [key]: 1 } })
    .toArray();
  return data;
}

async function insertData(collectionName, data) {
  return await collection(collectionName).insertOne(data);
}

async function deleteData(collectionName, id) {
  await collection(collectionName).deleteOne({ _id: ObjectId(id) });
}

async function patchData(collectionName, id, data) {
  await collection(collectionName).updateOne(
    { _id: ObjectId(id) },
    { $set: data }
  );
}

exports.getCollection = getCollection;
exports.getByID = getByID;
exports.getDataByQuery = getDataByQuery;
exports.insertData = insertData;
exports.deleteData = deleteData;
exports.patchData = patchData;
