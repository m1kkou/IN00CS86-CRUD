"use strict";
const Arviointi = require("../models/grade.model");

exports.findAll = function (req, res) {
  Arviointi.findAll(function (err, arviointi) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", arviointi);
    res.send(arviointi);
  });
};

exports.create = function (req, res) {
  const uusi_arviointi = new Arviointi(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Ole hyva ja lisaa puuttuvat tiedot" });
  } else {
    Arviointi.create(uusi_arviointi, function (err, arviointi) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Arviointi lisatty onnistuneesti!",
        data: arviointi,
      });
    });
  }
};

exports.findById = function (req, res) {
  Arviointi.findById(req.params.id, function (err, arviointi) {
    if (err) res.send(err);
    res.json(employee);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Ole hyva ja lisaa puuttuvat tiedot" });
  } else {
    Arviointi.update(
      req.params.id,
      new Arviointi(req.body),
      function (err, arviointi) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "Arviointi paivitetty onnistuneesti",
        });
      }
    );
  }
};

exports.delete = function (req, res) {
  Arviointi.delete(req.params.id, function (err, arviointi) {
    if (err) res.send(err);
    res.json({ error: false, message: "Arviointi poistettu onnistuneesti" });
  });
};
