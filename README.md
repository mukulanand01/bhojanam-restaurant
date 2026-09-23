# 🍛 Bhojanam

A full-stack MERN restaurant landing page and table reservation system — built to practice REST API design, form handling, and deploying a decoupled frontend/backend architecture.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)

## 🔗 Live Links

| | URL |
|---|---|
| 🖥️ Frontend | https://bhojanam-restaurant.vercel.app |
| ⚙️ Backend API | https://bhojanam-restaurant.onrender.com *(this is a REST API — visiting the root URL directly shows "Cannot GET /"; try `/api/v1/reservation/send` with a POST request)* |
| 📦 Repository | https://github.com/mukulanand01/bhojanam-restaurant |

## 📖 Overview

Bhojanam is a MERN-stack restaurant website featuring a landing page (hero section, menu highlights, team, testimonials) and a live table reservation system. Users can fill out a reservation form with their details, which gets validated, stored in MongoDB, and confirmed with a success redirect — while the backend and frontend are deployed independently across two hosting providers.

## ✨ Features

- 🍽️ Restaurant landing page with hero section, quality highlights, and dish showcase
- 📅 Live table reservation form (name, date, time, email, phone)
- ✅ Form validation with toast notifications (success/error feedback)
- 🔁 Success page redirect after a confirmed reservation
- 👨‍🍳 Team/chef showcase section
- ⭐ Customer testimonials section
- 📱 Fully responsive UI

## 🏗️ Architecture

```
┌─────────────┐         HTTPS          ┌──────────────┐         ┌─────────────┐
│   Frontend  │ ─────────────────────► │   Backend    │ ──────► │  MongoDB    │
│  (Vercel)   │ ◄───────────────────── │  (Render)    │         │  Atlas      │
│  React+Vite │      JSON Response     │ Node+Express │         └─────────────┘
└─────────────┘                        └──────────────┘
```

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, Axios, React Router, React Hot Toast |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ODM) |
| Deployment | Vercel (frontend), Render (backend), MongoDB Atlas (database) |

## 📂 Folder Structure

```
bhojanam-restaurant/
├── backend/
│   ├── controller/          # Reservation business logic
│   ├── database/            # MongoDB connection setup
│   ├── middlewares/         # Error handling middleware
│   ├── models/               # Mongoose schemas (Reservation)
│   ├── routes/               # Express route definitions
│   ├── app.js                 # Express app configuration
│   ├── server.js              # App entry point
│   ├── package.json
│   └── config.env.example
│
├── frontend/
│   ├── public/                 # Static images and SVGs
│   ├── src/
│   │   ├── Pages/               # Route-level pages (Home, Success, NotFound)
│   │   ├── components/          # UI sections (Navbar, HeroSection, Menu, Reservation, Team, Footer, etc.)
│   │   ├── restApi.json          # Static content data (dishes, team, testimonials)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/api/v1/reservation/send` | Submit a new table reservation | Public |

> Cross-check this table against `backend/routes/reservationRoute.js` and adjust if any route names differ.

## ⚙️ Getting Started Locally

### Prerequisites
- Node.js (v18+)
- A MongoDB Atlas account (or local MongoDB instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mukulanand01/bhojanam-restaurant.git
   cd bhojanam-restaurant
   ```

2. **Backend setup**
   ```bash
   cd backend
   npm install
   cp config.env.example config.env   # then fill in your own values
   node server.js
   ```

3. **Frontend setup** (in a separate terminal)
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 🔒 Environment Variables

**Backend (`backend/config.env`)**
```
PORT=
MONGO_URI=
FRONTEND_URL=
```

## 📸 Screenshots

<!-- Add 2-3 screenshots here, e.g.: -->
<!-- ![Home Page](./screenshots/home.png) -->
<!-- ![Reservation Form](./screenshots/reservation.png) -->

## 🚧 Future Improvements

- Admin panel to view/manage reservations
- Email confirmation on successful reservation
- Table availability checks before confirming a reservation
- Online menu ordering

## 👤 Author

**Mukul Anand**
- GitHub: [@mukulanand01](https://github.com/mukulanand01)
