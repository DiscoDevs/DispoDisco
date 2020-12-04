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
  const cursor = await collection(collectionName).findOne(
    { _id: ObjectId(id) },
    { _id: 0 }
  );
  console.log(cursor);
  return cursor;
}

async function insertData(collectionName, data) {
  return await collection(collectionName).insertOne(data);
}

async function deleteData(collectionName, data) {
  await collection(collectionName).deleteOne({ name: data });
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
