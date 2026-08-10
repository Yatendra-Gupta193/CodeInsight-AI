const axios = require("axios");

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

const getRepository = async (owner, repo) => {
  const { data } = await githubApi.get(`/repos/${owner}/${repo}`);

  return {
    name: data.name,
    fullName: data.full_name,
    description: data.description,
    stars: data.stargazers_count,
    forks: data.forks_count,
    language: data.language,
    owner: data.owner.login,
    avatar: data.owner.avatar_url,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    openIssues: data.open_issues_count,
  };
};

const getContributors = async (owner, repo) => {
  const { data } = await githubApi.get(`/repos/${owner}/${repo}/contributors`);

  return data.slice(0, 10).map((contributor) => ({
    id: contributor.id,
    username: contributor.login,
    avatar: contributor.avatar_url,
    contributions: contributor.contributions,
    profileUrl: contributor.html_url,
  }));
};

const getRepositoryTree = async (owner, repo) => {
  const branchRes = await githubApi.get(`/repos/${owner}/${repo}`);

  const defaultBranch = branchRes.data.default_branch;

  const treeRes = await githubApi.get(
    `/repos/${owner}/${repo}/git/trees/${defaultBranch}?recursive=1`,
  );

  return treeRes.data.tree;
};

const getFileContent = async (owner, repo, path) => {
  const res = await githubApi.get(`/repos/${owner}/${repo}/contents/${path}`);

  return Buffer.from(res.data.content, "base64").toString("utf8");
};

module.exports = {
  getRepository,
  getContributors,
  getRepositoryTree,
  getFileContent,
};
