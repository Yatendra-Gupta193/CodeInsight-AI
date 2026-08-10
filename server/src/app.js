const express = require("express");
const cors = require("cors");

const githubRoutes = require("./routes/github.routes");
const repositoryRoutes = require("./routes/repository.routes");

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

app.use(express.json());

app.use("/github", githubRoutes);
app.use("/repository", repositoryRoutes);
app.use("/", (req, res) => {
  res.status(200).send("Server is running");
});

module.exports = app;
