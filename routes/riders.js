const express = require("express");
const {
  getListByKey,
  getByID,
  getCollection,
  insertData,
  deleteData,
  updateData,
} = require("../lib/serverMethods");

const router = express.Router();
const collectionName = "riders";

router.get("/list", async (req, res) => {
  const data = await getListByKey({ collectionName, key: "alias" });
  res.send(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getByID({ collectionName, id });
  res.send(data);
});

router.get("/", async (req, res) => {
  const data = await getCollection({ collectionName, sortBy: "name" });
  res.send(data);
});

router.post("/", async (req, res) => {
  await insertData({ collectionName, data: req.body });
  res.send("Rider added.");
});

router.delete("/", async (req, res) => {
  const { id } = req.query;
  await deleteData({ collectionName, id });
  res.send("Rider deleted");
});

router.patch("/", async (req, res) => {
  const { id } = req.query;
  await updateData({ collectionName, id, data: req.body });
  res.send("Rider updated");
});

module.exports = router;
