require("dotenv").config();

const { onRequest } = require("firebase-functions/v2/https");

const app = require("./src/app");

const PORT = process.env.PORT || 5000;

if (process.env.USE_FIREBASE_FUNCTIONS === "true") {
  exports.codeinsight = onRequest(app);
} else {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}