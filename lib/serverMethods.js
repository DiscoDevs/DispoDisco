const { ObjectId } = require("mongodb");
const { collection } = require("./database");

async function getCollection({
  collectionName,
  dataName = "name",
  dataValue = "",
  sortBy = false,
  order = 1,
}) {
  const cursor = collection(collectionName).find({
    [dataName]: { $regex: new RegExp(dataValue, "i") },
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

async function insertData(collectionName, data) {
  return await collection(collectionName).insertOne(data);
}

async function deleteData(collectionName, id) {
  await collection(collectionName).deleteOne({ _id: ObjectId(id) });
}

async function updateData(collectionName, id, data) {
  await collection(collectionName).updateOne(
    { _id: ObjectId(id) },
    { $set: data }
  );
}

exports.getCollection = getCollection;
exports.getByID = getByID;
exports.insertData = insertData;
exports.deleteData = deleteData;
exports.updateData = updateData;
