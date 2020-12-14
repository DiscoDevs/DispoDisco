const express = require("express");
const {
  getCollection,
  getByID,
  insertData,
  deleteData,
  updateData,
} = require("../lib/serverMethods");
const router = express.Router();

const collectionName = "tasks";

router.get("/date", async (req, res) => {
  const { date } = req.query;
  const data = await getCollection({
    collectionName,
    name: "date",
    value: date,
    sortBy: "date",
  });
  res.send(data);
});

router.get("/type", async (req, res) => {
  const { type } = req.query;
  const data = await getCollection({
    collectionName,
    name: "priority",
    value: type,
    filterBy: "date",
  });
  res.send(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getByID({ collectionName, id });
  res.send(data);
});

router.post("/", async (req, res) => {
  await insertData({ collectionName, data: req.body });
  res.send("Tour added.");
});

router.delete("/", async (req, res) => {
  const { id } = req.query;
  await deleteData({ collectionName, id });
  res.send("Tour deleted");
});

router.patch("/", async (req, res) => {
  const { id } = req.query;
  await updateData({ collectionName, id, data: req.body });
  res.send("Tour updated");
});

module.exports = router;
