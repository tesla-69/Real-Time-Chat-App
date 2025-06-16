# Real-Time Chat Application

A modern real-time chat application built with MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO.

## Features

- 🔐 User authentication
- 💬 Real-time messaging
- 👤 User profiles
- 🌙 Dark/Light mode support
- 📱 Responsive design

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Zustand (State Management)
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.IO
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Environment Setup
```bash
# Backend .env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# Frontend .env
VITE_API_BASE_URL=http://localhost:5000
```

4. Start the application
```bash
# Start backend server
cd backend
npm run dev

# Start frontend in new terminal
cd frontend
npm run dev
```

## API Endpoints

### Auth Routes
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/logout` - Logout user
- `GET /api/auth/check` - Check auth status

### Message Routes
- `GET /api/messages/:id` - Get messages for a conversation
- `POST /api/messages` - Send a new message

## Acknowledgments

- Socket.IO Documentation
- MongoDB Documentation
- React Documentation