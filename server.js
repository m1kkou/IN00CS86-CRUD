const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

const port = process.env.PORT || 5000;

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(
    "GET /api/v1/arvioinnit: palauttaa kaikki arvioinnit \r\n GET /api/v1/arvioinnit/<idArviointi>: palauttaa tietyn arvioinnin. \r\n POST /api/v1/arvioinnit : luo arviointi \r\n DELETE /api/v1/employees/<employee_id>: poista Arviointi \r\n PUT /api/v1/arvioinnit/<idArviointi> päivitä arviointi"
  );
});

const arviointiRoutes = require("./src/routes/grade.routes");
// using as middleware
app.use("/api/v1/arvioinnit", arviointiRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
