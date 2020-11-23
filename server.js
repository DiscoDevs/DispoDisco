require("dotenv").config();

const express = require("express");
const path = require("path");
const { connectToDb } = require("./lib/database");
const {
  getCollection,
  insertData,
  deleteData,
  updateData,
  getDataByName,
} = require("./lib/serverMethods");
const app = express();
const port = process.env.PORT || 3600;

app.use(express.json());

app.get("/api/:collectionName", async (req, res) => {
  const { collectionName } = req.params;
  try {
    const collectionData = await getCollection(collectionName);
    res.send(collectionData);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.get("/api/:collectionName/:dataName", async (req, res) => {
  const { collectionName, dataName } = req.params;
  console.log({ collectionName, dataName });
  try {
    const data = await getDataByName(collectionName, dataName);
    res.send(data);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.post("/api/:collectionName", async (req, res) => {
  const { collectionName } = req.params;
  try {
    await insertData(collectionName, req.body);
    res.send("New Input posted into database.");
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.delete("/api/:collectionName/:data", async (req, res) => {
  const { collectionName, data } = req.params;
  try {
    deleteData(collectionName, data);
    res.send("Data deleted.");
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.patch("/api/:collectionName/:dataName", async (req, res) => {
  const { collectionName, dataName } = req.params;
  try {
    updateData(collectionName, dataName, req.body);
    res.send("Data edited.");
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

async function run() {
  console.log("Connection to Database...");
  await connectToDb(process.env.DB_URI, process.env.DB_NAME);
  console.log("Connected to Database");

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}.`);
  });
}

run();
