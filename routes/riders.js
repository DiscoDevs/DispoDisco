const express = require("express");
const {
  getListByKey,
  getByID,
  getCollection,
  insertData,
  deleteData,
  updateData,
  getPictureByName,
} = require("../lib/serverMethods");

const router = express.Router();
const collectionName = "riders";

router.get("/picture", async (req, res, next) => {
  const { alias, company } = req.query;
  try {
    const data = await getPictureByName({
      collectionName,
      alias,
      company,
    });
    res.send(data);
  } catch (error) {
    next(new Error(error));
  }
});

router.get("/list", async (req, res, next) => {
  const { company } = req.query;
  try {
    const data = await getListByKey({
      collectionName,
      key1: "alias",
      key2: "picture",
      key3: "active",
      company,
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

router.get("/", async (req, res, next) => {
  const { company } = req.query;
  try {
    const data = await getCollection({
      collectionName,
      sortBy: "name",
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
    res.send("Rider added.");
  } catch (error) {
    next(new Error(error));
  }
});

router.delete("/", async (req, res, next) => {
  const { id } = req.query;
  try {
    await deleteData({ collectionName, id });
    res.send("Rider deleted");
  } catch (error) {
    next(new Error(error));
  }
});

router.patch("/", async (req, res, next) => {
  const { id } = req.query;
  try {
    await updateData({ collectionName, id, data: req.body });
    res.send("Rider updated");
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
