
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

### 1. Clone the repository:
git clone https://github.com/harshitha030906/content-audit-tool.git

cd content-audit-tool

### 2.Install dependencies:
npm install
or
yarn install

### 3. Create a .env file in the root folder:
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

<img width="1920" height="1080" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/61dd2910-7729-4a36-b422-27c28fe09c9b" />
<img width="1920" height="1080" alt="Screenshot (21)" src="https://github.com/user-attachments/assets/fa3d6ed0-5ec6-4399-a0bb-005606a7bbf8" />
<img width="1920" height="1080" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/69f2065b-1b3c-4ece-a542-26d744025d2a" />
<img width="1920" height="1080" alt="Screenshot (23)" src="https://github.com/user-attachments/assets/be43f1d5-6864-41db-a9fb-86787ab1d399" />
<img width="1920" height="1080" alt="Screenshot (24)" src="https://github.com/user-attachments/assets/8b74afa2-e092-44ea-9163-44ddbd1a53e2" />
<img width="1920" height="1080" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/648d48bd-5d7e-4d2c-bd0d-140d8cb462c1" />
<img width="1920" height="1080" alt="Screenshot (26)" src="https://github.com/user-attachments/assets/ba19bf9c-3d51-4ef1-a87d-8cb57b925c6a" />
<img width="1920" height="1080" alt="Screenshot (27)" src="https://github.com/user-attachments/assets/20972c4d-6721-46aa-85a3-ac1350faf507" />

#### ✨ Thank you for checking out this project! If you find it helpful, please give it a ⭐ on GitHub!




