const fs = require("fs");
const express = require("express");
const app = new express();
const router = require("./routes");
app.use(express.json());

app.use("/todos", router);

app.listen(5000, () => {
  console.log("server is running");
});
