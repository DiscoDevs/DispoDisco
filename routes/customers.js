const express = require("express");
const {
  getCollection,
  insertData,
  deleteData,
  updateData,
  getByID,
} = require("../lib/serverMethods");
const router = express.Router();
const collectionName = "customers";

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getByID({ collectionName, id });
  res.send(data);
});

router.get("/", async (req, res) => {
  const data = await getCollection({ collectionName, sortBy: "company" });
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
