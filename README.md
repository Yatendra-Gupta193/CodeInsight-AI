# 🚀 CodeInsight AI

> **AI-Powered GitHub Repository Intelligence Platform**

CodeInsight AI is a full-stack GitHub Repository Intelligence Platform designed to help developers understand public GitHub repositories quickly and efficiently.

Instead of manually exploring large and complex repositories, users can simply provide a GitHub repository URL and get useful insights such as repository statistics, contributor analytics, AI-generated summaries, and AI-powered answers about the codebase.

The platform combines **GitHub REST APIs** with **Google Gemini AI** to transform raw repository information into meaningful technical insights.

---

## ✨ Features

### 📦 Repository Analysis

Analyze public GitHub repositories and view:

- Repository name and full name
- Repository description
- Programming language
- Stars and forks
- Repository owner
- Open issues
- Repository creation and update information
- General repository statistics

### 👥 Contributor Analytics

Explore repository contributors with:

- Top contributors
- Contribution counts
- GitHub usernames
- Contributor avatars
- GitHub profile links
- Community activity insights

### 🤖 AI Repository Summary

Generate an AI-powered technical summary containing:

- Project Overview
- Architecture Overview
- Key Features

This helps developers understand an unfamiliar repository without manually going through the entire project.

### 💬 AI Codebase Q&A

Ask natural-language questions about a repository.

Example questions:

- How is authentication implemented?
- How is state managed?
- What is the main architecture of this project?
- Which files handle API requests?
- What technologies are used?
- Where is the database connection configured?
- What are the major modules of the project?

The system uses repository context and Gemini AI to generate context-aware answers.

### 🔗 Public GitHub Repository Support

The application is designed to analyze public GitHub repositories without requiring users to manually clone them locally.

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | User interface development |
| TypeScript | Type-safe frontend development |
| Vite | Frontend development and build tool |
| Tailwind CSS | Styling and responsive UI |
| Axios | API communication |
| React Router DOM | Client-side routing |
| Lucide React | UI icons |

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API server |
| GitHub REST API | Repository and contributor data |
| Axios | External API requests |
| Simple Git | Git/repository operations |

## AI

| Technology | Purpose |
|---|---|
| Google Gemini API | AI-powered analysis |
| Gemini Flash Model | Repository summaries and codebase Q&A |
| Repository Context Analysis | Context-aware AI responses |

---

## 📁 Project Structure

```text
CodeInsight-AI/
│
├── client/
│   ├── .firebase/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── .env.example
│   ├── .firebaserc
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── firebase.json
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── skills-lock.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── github.controller.js
│   │   │   └── repository.controller.js
│   │   │
│   │   ├── routes/
│   │   │   ├── github.routes.js
│   │   │   └── repository.routes.js
│   │   │
│   │   ├── services/
│   │   │   ├── gemini.service.js
│   │   │   ├── github.service.js
│   │   │   └── repository.service.js
│   │   │
│   │   └── app.js
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── firebase.json
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

---

# 🚀 Getting Started

Follow the steps below to run CodeInsight AI locally.

## 1. Prerequisites

Make sure the following are installed on your system:

- Node.js (LTS recommended)
- npm
- Git
- GitHub Personal Access Token
- Google Gemini API Key

---

## 2. Clone the Repository

```bash
git clone https://github.com/Yatendra-Gupta193/CodeInsight-AI.git
cd CodeInsight-AI
```

## 3. Backend Setup

```bash
cd server
npm install
```

### Backend (`backend/.env.example`)

```.env
PORT=5000
GITHUB_TOKEN=your_github_personal_access_token
GEMINI_API_KEY=your_gemini_api_key
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

### Start Backend

```bash
npm start
```

---

## 4. Frontend Setup

```bash
npm install
```

### Frontend (`frontend/.env.example`)
```env
VITE_API_URL=your_server_url
```

### Start Frontend

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## API Overview

### 1. Analyze Repository

```http
GET /github/analyze
```

Query Parameters:

```text
owner
repo
```

---

### 2. Contributors

```http
GET /github/contributors
```

Query Parameters:

```text
owner
repo
```

---

### 3. AI Summary

```http
GET /github/summary
```


Query Parameters:

```text
owner
repo
```

---

### 4. Ask Codebase AI

```http
POST /repository/ask
```

Request:

```json
{
  "repoUrl": "https://github.com/facebook/react",
  "question": "How is state managed?"
}
```

Response:

```json
{
  "success": true,
  "answer": "React manages state using hooks such as useState and useReducer."
}
```

---

## 🧪 Local API Testing

The backend APIs can be tested directly using cURL, Postman, or a browser.

### 1. Repository Analysis
```
http://localhost:5000/github/analyze?owner=huggingface&repo=transformers

```
### 2. Contributors 
```
http://localhost:5000/github/contributors?owner=huggingface&repo=transformers

```

### 3. AI Repository Summary
```
http://localhost:5000/github/summary?owner=huggingface&repo=transformers

```

---

## 📈 Future Enhancements

- 🔐 Private repository support using GitHub OAuth
- 🌳 Repository file-tree visualization
- 🔗 Code dependency graph generation
- 💾 Persistent repository analysis history
- 🔍 Code quality analysis
- 🛡️ Security vulnerability insights
- 📈 Advanced repository health scoring
- ⚖️ Multi-repository comparison

---

## ⭐ Project Highlights

- 🤖 Google Gemini AI integration
- 📦 GitHub repository analytics
- 👥 Contributor analytics
- 🧠 AI-powered repository summaries
- 💬 Context-aware codebase Q&A
- 🔌 RESTful backend APIs
- 🔐 Environment-based secret management
- 🌐 Public GitHub repository analysis
- 📱 Responsive developer-focused interface
- 🛠️ Modular frontend and backend architecture
- 🚀 Ready for cloud deployment
