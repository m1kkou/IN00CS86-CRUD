const express = require("express");

const router = express.Router();

const arviointiController = require("../controllers/grade.controller");
//READ ALL:
router.get("/", arviointiController.findAll);
//CREATE:
router.post("/", arviointiController.create);
//READ:
router.get("/:id", arviointiController.findById);
//UPDATE:
router.put("/:id", arviointiController.update);
//DELETE:
router.delete("/:id", arviointiController.delete);
module.exports = router;
