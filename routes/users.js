const express = require("express");
const {
  validateUser,
  getCompanyName,
  insertData,
} = require("../lib/serverMethods");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const validation = await validateUser({ username, password });
    res.send(validation);
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/register", async (req, res, next) => {
  try {
    await insertData({ collectionName: "users", data: req.body });
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/company", async (req, res, next) => {
  try {
    const { username } = req.body;
    const name = await getCompanyName({ username });
    res.send(name);
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
