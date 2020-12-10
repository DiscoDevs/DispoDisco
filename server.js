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
  getDataByQuery,
} = require("./lib/serverMethods");
const app = express();
const port = process.env.PORT || 3600;

app.use(express.json());

app
  .route("/api/:collectionName")
  .get(async (req, res) => {
    const { name, value, sortBy, filterBy, filterValue } = req.query;
    const order = req.query.order === "desc" ? -1 : 1;
    const { collectionName } = req.params;
    try {
      const collectionData = await getCollection({
        collectionName,
        name,
        value,
        sortBy,
        filterBy,
        filterValue,
        order,
      });
      res.send(collectionData);
    } catch (e) {
      console.error(e);
      res
        .status(500)
        .send("An unexpected server error occured. Please try again later.");
    }
  })
  .post(async (req, res) => {
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
  })
  .delete(async (req, res) => {
    const { id } = req.query;
    const { collectionName } = req.params;
    try {
      await deleteData(collectionName, id);
      res.send("Data deleted.");
    } catch (e) {
      console.error(e);
      res
        .status(500)
        .send("An unexpected server error occured. Please try again later.");
    }
  })
  .patch(async (req, res) => {
    const { id } = req.query;
    const { collectionName } = req.params;
    try {
      await updateData(collectionName, id, req.body);
      res.send("Data edited.");
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

app.get("/api/:collectionName/listall/:key", async (req, res) => {
  const { collectionName, key } = req.params;
  try {
    const data = await getDataByQuery({
      collectionName,
      key,
    });
    res.send(data);
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
