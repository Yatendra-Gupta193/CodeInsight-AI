const express = require("express");

const { askRepository } = require("../controllers/repository.controller");

const router = express.Router();

router.post("/ask", askRepository);

module.exports = router;
