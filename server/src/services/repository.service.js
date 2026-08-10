const githubService = require("./github.service");

const buildRepositoryContext = async (owner, repo) => {
  const tree = await githubService.getRepositoryTree(owner, repo);

  const codeFiles = tree
    .filter(
      (item) =>
        item.type === "blob" &&
        (item.path.endsWith(".js") ||
          item.path.endsWith(".ts") ||
          item.path.endsWith(".tsx") ||
          item.path.endsWith(".jsx")),
    )
    .slice(0, 20);

  let context = "";

  for (const file of codeFiles) {
    try {
      const content = await githubService.getFileContent(
        owner,
        repo,
        file.path,
      );

      context += `
FILE: ${file.path}

${content}

`;
    } catch (error) {
      console.log(`Failed to read ${file.path}`);
    }
  }

  return context;
};

module.exports = {
  buildRepositoryContext,
};
