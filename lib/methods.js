const { collection } = require("./database");

async function getCollection(collectionName) {
  const promises = await collection(collectionName).find({}).toArray();
  const data = await promises;
  return data;
}

async function insertData({ collectionName, ...props }) {
  await collection(collectionName).insertOne({
    props,
  });
}

exports.getCollection = getCollection;
exports.insertData = insertData;
