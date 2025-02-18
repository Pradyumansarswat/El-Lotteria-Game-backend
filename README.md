# 🎮 El Lotteria Game Backend

🚀 **Backend service for the El Lotteria Game, providing secure and reliable APIs.**

---

## 🛠️ Tech Stack

- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool for Node.js.
- **nodemon**: Tool for automatically restarting the server during development.

---

## 🚀 Getting Started

### 🔥 1. Clone the Repository

```sh
git clone https://github.com/Pradyumansarswat/El-Lotteria-Game.git
cd El-Lotteria-Game/backend
```

### 🖥️ Running the Backend

#### 📌 Prerequisites
Make sure you have:
- Node.js installed
- MongoDB Atlas set up

#### ⚡ Steps to Run Backend

1️⃣ Navigate to the backend folder (if not already there):
```sh
cd backend
```
2️⃣ Install dependencies:
```sh
npm install
```
3️⃣ Set up environment variables:
- Create a `.env` file in the backend folder.
- Add your credentials (example):
```ini
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```
4️⃣ Run the backend:
```sh
npm start  # or npm run dev (for nodemon)
```
The backend should now be running at `http://localhost:5000`

### 🚀 Deployment

#### 🎭 Deploying Backend on Render

1. Push your latest code:
```sh
git add .
git commit -m "Deploy backend"
git push origin main
```
2. Go to Render and create a new web service.
3. Connect your GitHub repo and set:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variables in Render's settings.

### 🛠️ Troubleshooting

- **Backend not starting?** Check if your `.env` file is set up correctly.
- **Database connection errors?** Ensure your MongoDB Atlas credentials are correct.

---

## ✨ Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to your fork (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the terms specified in the repository.  
Feel free to use and modify it as needed! 🎮🚀

---

## 📞 Contact

For support, contact:
- 🐦 Twitter: [X](https://x.com/PradyumanCodes)
- 📌 GitHub: [GitHub](https://github.com/Pradyumansarswat)

