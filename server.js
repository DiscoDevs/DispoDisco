require("dotenv").config();

const express = require("express");
const path = require("path");
const { connectToDb } = require("./lib/database");
const app = express();
const port = process.env.PORT || 3600;
const tours = require("./routes/tours");
const riders = require("./routes/riders");
const customers = require("./routes/customers");

app.use(express.json());

app.use("/api/tours", tours);
app.use("/api/riders", riders);
app.use("/api/customers", customers);

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//eslint-disable-next-line
app.use((error, req, res, next) => {
  res.json({
    message: "An unexpected server error occured. Please try again later.",
  });
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
