const express = require("express");

const {
  analyzeRepository,
  getContributors,
  generateSummary,
} = require("../controllers/github.controller");

const router = express.Router();

router.get("/analyze", analyzeRepository);
router.get("/contributors", getContributors);
router.get("/summary", generateSummary);

module.exports = router;
