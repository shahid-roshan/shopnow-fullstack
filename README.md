# 🛒 ShopNow — Full Stack E-Commerce Website

A complete, production-ready full-stack e-commerce platform built with React, Node.js, MongoDB and Stripe.

## 🌐 Live Demo

- **Frontend:** https://shopnowshahid.netlify.app
- **Backend API:** https://shopnow-backend-production-19a3.up.railway.app

## 📸 Preview

A fully functional online shopping platform inspired by Amazon, Daraz and Shopify.

## ✨ Features

- User login and registration with JWT authentication
- Product catalog with search, filter and sort
- Shopping cart with quantity update and remove
- Secure checkout with Stripe payment integration
- Order history and live order tracking
- Admin dashboard with stats, orders and products
- Wishlist, user profile and account settings
- About Us, Contact, FAQ and Blog pages
- Fully responsive design
- 17 pages total

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router DOM
- LocalStorage for cart management
- Deployed on Netlify

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Stripe for payments
- Deployed on Railway

## 📁 Project Structure

```
shopnow/
├── client/
│   └── shopnow-client/        # React frontend
│       ├── src/
│       │   ├── pages/         # 17 pages
│       │   ├── components/    # Navbar
│       │   └── api.js         # Backend connection
│       └── public/
└── server/                    # Node.js backend
    ├── routes/                # Auth, Products, Orders, Payment
    ├── models/                # User, Product, Order
    └── middleware/            # JWT Auth
```

## 🚀 How to Run Locally

### Backend
```bash
cd server
npm install
node index.js
```

### Frontend
```bash
cd client/shopnow-client
npm install
npm start
```

## 🔑 Environment Variables

Create a `.env` file in the `server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
CLIENT_URL=http://localhost:3000
```

## 👨‍💻 Developer

**Shahid Swati**
Full Stack Developer

- Frontend: React, HTML, CSS
- Backend: Node.js, Express
- Database: MongoDB
- Payment: Stripe
- Deployment: Netlify + Railway

## 📄 License

MIT License — Free to use and modify.
