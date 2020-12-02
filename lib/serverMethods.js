const { collection } = require("./database");

async function getCollection({ collectionName, sortBy = false }) {
  const cursor = collection(collectionName).find({});
  if (sortBy) {
    cursor.sort({ [sortBy]: 1 });
  }
  return await cursor.toArray();
}

async function getDataByName(collectionName, dataName) {
  return await collection(collectionName).findOne({ name: dataName });
}

async function getDataByOperator({
  collectionName,
  dataName,
  data,
  sortBy = false,
}) {
  const cursor = collection(collectionName).find({
    [dataName]: { $regex: new RegExp(data, "i") },
  });
  if (sortBy) {
    cursor.sort({ [sortBy]: 1 });
  }
  return await cursor.toArray();
}

async function insertData(collectionName, data) {
  return await collection(collectionName).insertOne(data);
}

async function deleteData(collectionName, data) {
  await collection(collectionName).deleteOne({ name: data });
}

async function updateData(collectionName, dataName, data) {
  await collection(collectionName).updateOne(
    { name: dataName },
    { $set: data }
  );
}

exports.getCollection = getCollection;
exports.getDataByName = getDataByName;
exports.getDataByOperator = getDataByOperator;
exports.insertData = insertData;
exports.deleteData = deleteData;
exports.updateData = updateData;
