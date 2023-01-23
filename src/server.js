require("dotenv").config();

const express = require("express");
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/health", (req, res) =>
  res.status(200).json({ msg: "API is healthy" })
);

app.listen(port, () => console.log("Server is listening"));
