const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandlers");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log("Server runs on port", port);
});
