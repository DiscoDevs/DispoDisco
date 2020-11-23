const { collection } = require("./database");

async function getCollection(collectionName) {
  const promises = await collection(collectionName).find({}).toArray();
  const data = await promises;
  return data;
}

async function getDataByName(collectionName, dataName) {
  const promise = await collection(collectionName).findOne({ name: dataName });
  const data = await promise;
  return data;
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
exports.insertData = insertData;
exports.deleteData = deleteData;
exports.updateData = updateData;
