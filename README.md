# 🔗 LinkShort — URL Shortener

A modern and simple URL Shortener built with **Node.js, Express.js, React.js, Redux Toolkit, Framer Motion, and SQL**.

LinkShort allows users to convert long URLs into short, shareable links. The application provides a clean frontend, REST API, SQL database integration, and smooth animations.

---

## ✨ Features

- 🔗 Shorten long URLs
- 📋 Copy shortened URLs easily
- 🚀 Fast REST API with Express.js
- 🗄️ SQL database for storing URLs
- ⚛️ React.js frontend
- 🔄 Redux Toolkit for state management
- 🎬 Framer Motion animations
- 📱 Responsive UI
- 🔍 Redirect from short URL to original URL
- 🛡️ Server-side URL validation
- 📊 Store and manage shortened URLs

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Framer Motion
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- REST API

### Database
- SQL

---

## 📁 Project Structure

```text
URL SHORTNER/
│
├── client/                         # React frontend
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── firebase.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── server/                         # Node.js + Express backend
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/linkshort.git
cd linkshort
```

### 2. Setup the backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/` with the required environment variables (example):
```env
PORT=5000
DATABASE_URL=your_sql_connection_string
BASE_URL=http://localhost:5000
```

Run the backend server:
```bash
npm start
```

### 3. Setup the frontend
```bash
cd ../client
npm install
```

Create a `.env` file inside `client/` with the required environment variables (example):
```env
VITE_API_BASE_URL=http://localhost:5000
```

Run the frontend:
```bash
npm run dev
```

---

## 🚀 Usage

1. Start both the backend (`server`) and frontend (`client`).
2. Open the app in your browser (default: `http://localhost:5173`).
3. Paste a long URL into the input field and click **Shorten**.
4. Copy the generated short URL and share it.
5. Visiting the short URL will redirect to the original long URL.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
