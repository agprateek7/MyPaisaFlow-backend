
# 💸 MyPaisaFlow Backend (MERN Stack)

This is the **backend** of the **MyPaisaFlow App** — a full-stack financial tracker built using **MongoDB, Express.js, React, and Node.js**. This backend provides APIs for user authentication, income and expense tracking, profile photo upload, and data export in Excel format.

## 🔥 Features

- 🔐 JWT-based User Authentication (Login, Signup)
- 💼 Manage Income and Expense entries (Add, View, Delete)
- 📊 Dashboard APIs for overview stats
- 📁 Export data to Excel (Income & Expense)
- 🖼️ Upload and manage profile images
- 🌐 MongoDB Atlas Integration
- ⚙️ Scalable REST API structure

## 📁 Project Structure

```
backend/
├── controllers/         # Route logic
├── middleware/          # JWT and auth middleware
├── models/              # Mongoose schemas
├── routes/              # All API endpoints
├── utils/               # Excel export logic
├── uploads/             # Profile photo storage
├── server.js            # Main server entry point
├── .env                 # Environment variables
```

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/agprateek7/MyPaisaFlow-backend.git
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```
   PORT=5000
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

## 🛠️ API Endpoints

### Auth Routes
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user and return JWT
- `GET /api/auth/getUser` – Get user profile
- `POST /api/auth/upload-image` – Upload profile photo

### Income Routes
- `POST /api/income/add` – Add income
- `GET /api/income/get` – Fetch all income
- `DELETE /api/income/:id` – Delete income
- `GET /api/income/downloadexcel` – Download Excel report

### Expense Routes
- `POST /api/expense/add` – Add expense
- `GET /api/expense/get` – Fetch all expenses
- `DELETE /api/expense/:id` – Delete expense
- `GET /api/expense/downloadexcel` – Download Excel report

### Dashboard Route
- `GET /api/dashboard/` – Total balance, income, and expenses

## 📄 License

This project is licensed under the MIT License.
