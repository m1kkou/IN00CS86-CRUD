"use strict";

var dbConn = require("./../../config/db.config");

var Arviointi = function (arviointi) {
  this.etunimi = arviointi.etunimi;
  this.sukunimi = arviointi.sukunimi;
  this.arvosana = arviointi.arvosana;
  this.paivamaata = new Date();
  this.nimi = arviointi.nimi;
  this.idArviointi = arviointi.idArviointi ? arviointi.idArviointi : -1;
  this.idOpiskelija = arviointi.idOpiskelija ? arviointi.idOpiskelija : -1;
  this.idOpintojakso = arviointi.idOpintojakso ? arviointi.idOpintojakso : -1;
};

Arviointi.create = function (newGrad, result) {
  dbConn.query("INSERT INTO Arviointi set ?", newGrad, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Arviointi.findById = function (idArviointi, result) {
  dbConn.query(
    "Select * from Arviointi where id = ? ",
    idArviointi,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Arviointi.findAll = function (result) {
  dbConn.query("Select * from Arviointi", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Arvioinnit : ", res);
      result(null, res);
    }
  });
};

Arviointi.update = function (idArviointi, arviointi, result) {
  dbConn.query(
    "UPDATE Arviointi SET etunimi=?,sukunimi=?,arvosana=?,paivamaata=?,nimi=?,idOpiskelija=?,idArvosana=? WHERE idArviointi = ?",
    [
      arviointi.etunimi,
      arviointi.sukunimi,
      arviointi.arvosana,
      arviointi.paivamaata,
      arviointi.nimi,
      arviointi.idOpiskelija,
      arviointi.idOpintojakso,
      idArviointi,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Arviointi.delete = function (idArviointi, result) {
  dbConn.query(
    "DELETE FROM Arviointi WHERE id = ?",
    [idArviointi],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Arviointi;
