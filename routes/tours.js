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

router.get("/date", async (req, res, next) => {
  const { query } = req.query;
  try {
    const data = await getCollection({
      collectionName,
      name: "date",
      value: query,
      sortBy: "date",
    });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.get("/type", async (req, res, next) => {
  const { query } = req.query;
  try {
    const data = await getCollection({
      collectionName,
      name: "priority",
      value: query,
      filterBy: "date",
    });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await getByID({ collectionName, id });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/", async (req, res, next) => {
  try {
    await insertData({ collectionName, data: req.body });
    res.send("Tour added.");
  } catch (error) {
    next(new Error(error));
  }
});

router.delete("/", async (req, res, next) => {
  const { id } = req.query;
  try {
    await deleteData({ collectionName, id });
    res.send("Tour deleted");
  } catch (error) {
    next(new Error(error));
  }
});

router.patch("/", async (req, res, next) => {
  const { id } = req.query;
  try {
    await updateData({ collectionName, id, data: req.body });
    res.send("Tour updated");
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
