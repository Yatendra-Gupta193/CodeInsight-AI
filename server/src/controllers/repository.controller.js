const repositoryService = require("../services/repository.service");
const aiService = require("../services/gemini.service");

const extractRepoInfo = (repoUrl) => {
  const cleaned = repoUrl
    .replace("https://github.com/", "")
    .replace("http://github.com/", "")
    .replace(/\/$/, "");

  const [owner, repo] = cleaned.split("/");

  return { owner, repo };
};

const askRepository = async (req, res) => {
  try {
    const { repoUrl, question } = req.body;

    const { owner, repo } = extractRepoInfo(repoUrl);

    const context = await repositoryService.buildRepositoryContext(owner, repo);

    const answer = await aiService.askCodebase(context, question);

    return res.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  askRepository,
};
