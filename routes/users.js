const express = require("express");
const { validateUser } = require("../lib/serverMethods");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const validation = await validateUser({ username, password });
    res.send(validation);
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
