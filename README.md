<h1>Full Stack Food Delivery Website</h1>

A full-stack food ordering web application built using the MERN stack, featuring user authentication, cart system, admin dashboard, and Stripe payment integration.

Live Website: https://food-ecom.vercel.app

Backend API: https://food-ecom-i2ci.onrender.com

<h3>User Features</h3>

JWT-based authentication (Login & Signup)

Browse food items by category

Add/remove items from cart

Responsive UI (mobile-friendly)

Checkout system

Secure Stripe payment integration

User profile management

Admin Features

Admin dashboard

Add new food items

Upload food images

Categorize food items

Delete food items

View all user orders

Note: Order tracking is handled by the admin.

<h2>Tech Stack</h2>
<h3>Frontend</h3>

React (Vite)

CSS

Axios

Backend

Node.js

Express.js

MongoDB

JWT Authentication

Database

MongoDB Atlas

Payments

Stripe

Hosting

Frontend: Vercel

Backend: Render

<h3>Screenshots</h3>

Home Page
<img width="2048" height="1093" alt="image" src="https://github.com/user-attachments/assets/a7bb1bbf-caa7-49cb-aed7-a1c000473c5f" />

Login / Signup
<img width="2048" height="1097" alt="image" src="https://github.com/user-attachments/assets/4ab0b382-4e74-43a9-b58e-0aed5a008c3f" />

Cart Page
<img width="1861" height="966" alt="image" src="https://github.com/user-attachments/assets/bb15b4d0-10f7-40e1-856a-82c4d3aa2f88" />

Admin Dashboard
<img width="1857" height="985" alt="image" src="https://github.com/user-attachments/assets/445e7ea4-575b-4cc7-8ee6-fc6eb41c894d" />

<h3>Live Demo</h3>

Try the full application here: https://food-ecom.vercel.app

<h3>Local Setup</h3>

If you want to run the project locally:

Prerequisites

Node.js

MongoDB Atlas account

Stripe account

Clone the Repository
git clone https://github.com/Tejas-Raja/food-ecom.git

Install Dependencies
Backend
cd backend
npm install

Frontend
cd frontend
npm install

Environment Variables

Create a .env file inside the backend folder and add:

MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret
STRIPE_SECRET_KEY=your_stripe_key

Run the Project
Backend
npm run dev

Frontend
npm run dev

<h3>Authentication</h3>

JWT-based authentication

Secure password hashing

Protected routes

Token-based session handling

API Communication

RESTful API architecture

Axios for frontend-backend communication
