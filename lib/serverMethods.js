const { collection } = require("./database");

async function getCollection(collectionName) {
  return await collection(collectionName).find({}).toArray();
}

async function getDataByName(collectionName, dataName) {
  return await collection(collectionName).findOne({ name: dataName });
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