const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

const port = process.env.PORT || 5000;

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const arviointiRoutes = require("./src/routes/grade.routes");
// using as middleware
app.use("/api/v1/arvioinnit", arviointiRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
