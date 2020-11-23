require("dotenv").config();

const express = require("express");
const path = require("path");
const { connectToDb } = require("./lib/database");
const { getCollection } = require("./lib/methods");
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
