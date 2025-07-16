# 🧠 Vyomart – AI-Driven Smart Shopping Experience 🛒

Vyomart is a full-featured AI-powered E-Commerce platform built using the **MERN stack**. It supports secure Google login, real-time stock updates, Razorpay payments, an admin dashboard, and smart product recommendations. Perfect for final-year projects and real-world deployment!

---

## 🚀 Features

- 🔐 Google & JWT Authentication (Firebase + Token)
- 🛍️ Add to Cart, Checkout, Order Tracking
- 💳 Razorpay Payment Gateway
- 📦 Real-time Stock Updates
- 🤖 AI-Based Product Recommendations
- 📱 Responsive Design for Mobile & Desktop
- 🧑‍💼 Full Admin Dashboard (Products, Orders, Users)
- 🚀 Free Deployment on Render

---

## ⚙️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT + Firebase (Google Auth)  
- **Payments:** Razorpay  
- **AI Engine:** Custom Recommendation System  
- **Hosting:** Render

---

## 📁 Folder Structure

```

Vyomart/
├── admin/      # Admin Dashboard
├── frontend/   # User-facing Website
├── backend/    # Express.js Server + API
└── README.md

````

---

## 🔧 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AshwinTripathi2004/Vyomart.git
cd Vyomart
````

### 2. Install Dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

### 3. Create `.env` Files

#### backend/.env

```
PORT=5000
MONGO_URL=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```

#### frontend/.env

```
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY=your_razorpay_key
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

✅ **Note:** Do not share `.env` files publicly. They are ignored using `.gitignore`.

---

## 🧠 AI Recommendation System

Vyomart includes a built-in AI engine that suggests products based on:

* Browsing behavior
* Cart items
* Purchase history

🔜 *Upcoming*: Collaborative filtering & personalization models.

---

## 🖥️ Running the Project

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd ../frontend
npm run dev
```

### Start Admin Dashboard

```bash
cd ../admin
npm run dev
```

---

## 🌐 Live Demo

🔗 [Vyomart on Render](vyomart-frontend.onrender.com) 

---

## 👨‍💻 Author

**Ashwin Tripathi**
🔗 [GitHub Profile](https://github.com/AshwinTripathi2004)

---

## 📄 License

This project is open-source and created for educational and learning purposes.

---
