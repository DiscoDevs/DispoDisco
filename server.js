require("dotenv").config();

const express = require("express");
const path = require("path");
const { connectToDb } = require("./lib/database");
const {
  getCollection,
  insertData,
  deleteData,
  updateData,
  getByID,
} = require("./lib/serverMethods");
const app = express();
const port = process.env.PORT || 3600;

app.use(express.json());

app.get("/api/:collectionName", async (req, res) => {
  const dataName = req.query.name;
  const dataValue = req.query.value;
  const { sortBy } = req.query;
  const order = req.query.order === "desc" ? -1 : 1;
  const { collectionName } = req.params;
  try {
    const collectionData = await getCollection({
      collectionName,
      dataName,
      dataValue,
      sortBy,
      order,
    });
    res.send(collectionData);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send("An unexpected server error occured. Please try again later.");
  }
});

app.get("/api/:collectionName/:id", async (req, res) => {
  const { collectionName, id } = req.params;
  try {
    const data = await getByID({
      collectionName,
      id,
    });
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

app.delete("/api/:collectionName", async (req, res) => {
  const { data } = req.query;
  const { collectionName } = req.params;
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

app.patch("/api/:collectionName/", async (req, res) => {
  const dataName = req.query.data;
  const { collectionName } = req.params;
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

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

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
