
# 📊 Content Audit Tool

A full‑stack web application that audits text content and any website url using AI and provides detailed metrics such as **SEO score**, **readability**, **serp analysis**, **reliability**, and **structure**. It helps content creators and SEO specialists understand how well their text performs and offers actionable recommendations to improve it.

---

## 🚀 Features

- 🔍 **AI‑powered content analysis** — evaluates your text on important metrics.
- 🧠 **Detailed recommendations** for improving SEO, readability and more.
- 📑 **Keyword extraction** for better content optimization.
- 📊 Clean UI to display audit results.
- 📡 React frontend + Express backend.
- 🔑 Secure API integration (e.g., Gemini/OpenAI).

---

## 🛠 Tech Stack

| Frontend | Backend | AI |
|----------|---------|----|
| React (Vite) | Node.js & Express | Gemini/OpenAI API |
| Axios | axios | AI text analysis |

---

## 📁 Folder Structure
├── public/ # Frontend static assets

├── src/ # React frontend source code

├── server/ # Express backend source code

├── .gitignore

├── package.json

├── README.md

---

## 📥 Installation

# 1. Clone the repository:
git clone https://github.com/harshitha030906/content-audit-tool.git

cd content-audit-tool

# 2.Install dependencies:
npm install
or
yarn install

# 3. Create a .env file in the root folder:
GEMINI_API_KEY=your_gemini_api_key_here

#Firecrawl API key for SERP and keyword analysis
FIRECRAWL_API_KEY=your_firecrawl_api_key_here

#Backend base URL (frontend will call this)
BASE_URL=http://localhost:3005

#MongoDB connection string
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/yourDB?retryWrites=true&w=majority

#Server port (Express)
PORT=3005

## 🚀 Running the App

## 🖥 Backend
cd server

npm start

#The backend will start on the port defined in .env (default: 3005).

## 📱 Frontend
npm run dev

## 🔍 How to Use

1.Open the app in your browser.

2.Paste any website url or write your own content in the input area.

3.Submit to run the audit.

4.View your SEO score, readability score, SERP insights, reliability, structure, and recommendations.

5.Target keywords will also be displayed.

## 🧪 Example Text

Use the following sample text to test the audit:

Generative AI has rapidly transformed the field of artificial intelligence, providing tools for content creation, code generation, and creative design. Google Gemini and other AI platforms are leading the way in offering advanced natural language processing capabilities...

#### ✨ Thank you for checking out this project! If you find it helpful, please give it a ⭐ on GitHub!




