const githubService = require("../services/github.service");
const aiService = require("../services/gemini.service");

const analyzeRepository = async (req, res) => {
  try {
    const { owner, repo } = req.query;

    if (!owner || !repo) {
      return res.status(400).json({
        success: false,
        message: "Owner and repo are required",
      });
    }

    const data = await githubService.getRepository(owner, repo);

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getContributors = async (req, res) => {
  try {
    const { owner, repo } = req.query;

    const contributors = await githubService.getContributors(owner, repo);

    return res.json({
      success: true,
      data: contributors,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const generateSummary = async (req, res) => {
  try {
    const { owner, repo } = req.query;

    const repository = await githubService.getRepository(owner, repo);

    const summary = await aiService.generateRepositorySummary(repository);

    return res.json({
      success: true,
      data: summary,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeRepository,
  getContributors,
  generateSummary,
};
