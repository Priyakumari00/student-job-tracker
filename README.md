# Full-Stack Project (MERN)

This is a MERN (MongoDB, Express, React, Node.js) stack project `Student Job Tracker` with a frontend and backend.

## 🚀 Features
- React 19 for frontend
- Node.js and Express.js for backend
- MongoDB Atlas for database storage
- API Integration with Axios
- Environment Variables Support
- Optimized for Production

---

## Hosted Links
- Frontend: https://student-job-tracker-sigma.vercel.app
- Backend: https://student-job-tracker-server.onrender.com

---

## 📦 Installation

### Clone the Repository
```sh
git clone https://github.com/Priyakumari00/student-job-tracker
cd student-job-tracker
```

### Install Dependencies

#### Frontend
```sh
cd frontend
npm install
```

#### Backend
```sh
cd backend
npm install
```

---

## 🛠 Usage

### Start the Backend Server
```sh
cd backend
node index.js
```
The backend server runs on `http://localhost:5000` by default.

### Start the Frontend Server
```sh
cd frontend
npm start
```
The frontend runs on `http://localhost:3000` by default.

---

## ⚙️ Environment Variables
Create a `.env` file in both **frontend** and **backend** directories.

#### Frontend `.env`:
```sh
REACT_APP_API_URL=http://localhost:5000
```

#### Backend `.env`:
```sh
PORT=5000
MONGO_URI=mongodb+srv://your-mongo-db-url
JWT_SECRET=your-secret-key
```
Restart the servers after modifying `.env`.




