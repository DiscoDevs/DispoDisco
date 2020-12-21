const express = require("express");
const {
  validateUser,
  getCompanyName,
  insertData,
} = require("../lib/serverMethods");
const router = express.Router();
const CryptoJS = require("crypto-js");

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = CryptoJS.SHA256(password).toString();
    const validation = await validateUser({
      username,
      password: hashedPassword,
    });
    res.send(validation);
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/register", async (req, res, next) => {
  const { username, password, company, hash } = req.body;
  const hashedPassword = CryptoJS.SHA256(password).toString();
  const hashedCompany = CryptoJS.AES.encrypt(company, hash).toString();
  console.log("password", hashedPassword);
  try {
    await insertData({
      collectionName: "users",
      data: {
        username,
        password: hashedPassword,
        company: hashedCompany,
        hash,
      },
    });
  } catch (error) {
    next(new Error(error));
  }
});

router.post("/company", async (req, res, next) => {
  try {
    const { username } = req.body;
    const name = await getCompanyName({ username });
    res.json(name);
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = router;
