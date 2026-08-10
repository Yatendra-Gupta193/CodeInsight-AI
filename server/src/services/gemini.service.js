const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateRepositorySummary = async (repository) => {
  const prompt = `
Analyze this GitHub repository.

Repository Name:
${repository.fullName}

Description:
${repository.description}

Language:
${repository.language}

Stars:
${repository.stars}

Generate:

1. Project Overview
2. Architecture Overview
3. Key Features

Keep response concise.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text;
};

const askCodebase = async (context, question) => {
  const prompt = `
Repository Context:

${context}

Question:

${question}

Instructions:
- Answer only using information found in the repository context.
- Do not invent or assume functionality.
- If the information is not available in the code, respond:
  "I could not find enough information in the repository to answer this question."
- Mention relevant file names when possible.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  generateRepositorySummary,
  askCodebase,
};
