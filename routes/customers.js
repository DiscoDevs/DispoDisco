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

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await getByID({ collectionName, id });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.get("/", async (req, res, next) => {
  const { company } = req.query;
  try {
    const data = await getCollection({
      collectionName,
      sortBy: "company",
      company,
    });
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
