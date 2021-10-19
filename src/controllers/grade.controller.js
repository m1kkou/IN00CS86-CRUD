"use strict";
const Arviointi = require("../models/grade.model");
const arviointi = require("../models/grade.model");

exports.findAll = function (req, res) {
  Employee.findAll(function (err, arviointi) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", arviointi);
    res.send(arviointi);
  });
};

exports.create = function (req, res) {
  const uusi_arviointi = new Arviointi(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Arviointi.create(uusi_arviointi, function (err, arviointi) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Arviointi added successfully!",
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
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Arviointi.update(
      req.params.id,
      new Arviointi(req.body),
      function (err, arviointi) {
        if (err) res.send(err);
        res.json({ error: false, message: "Arviointi successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
  Arviointi.delete(req.params.id, function (err, arviointi) {
    if (err) res.send(err);
    res.json({ error: false, message: "Arviointi successfully deleted" });
  });
};
