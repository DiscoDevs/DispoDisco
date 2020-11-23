const { MongoClient } = require("mongodb");

let client;
let db;

async function connectToDb(url, dbName) {
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

function closeDbConnection() {
  client.close();
}

function collection(name) {
  return db.collection(name);
}

exports.connectToDb = connectToDb;
exports.closeDbConnection = closeDbConnection;
exports.collection = collection;
