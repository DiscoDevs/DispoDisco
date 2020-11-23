const { collection } = require("./database");

async function getCollection(collectionName) {
  const promises = await collection(collectionName).find({}).toArray();
  const data = await promises;
  return data;
}

async function insertData(collectionName, data) {
  return await collection(collectionName).insertOne(data);
}

async function deleteData(collectionName, data) {
  await collection(collectionName).deleteOne({ name: data });
}

exports.getCollection = getCollection;
exports.insertData = insertData;
exports.deleteData = deleteData;
