# 📚 BookNest Project

BookNest is a full-stack web application for managing a digital book marketplace. It offers roles for **Admin**, **Seller**, and **User**, providing interfaces to manage book listings, orders, wishlists, and more.

## 🚀 Features

### 👤 User
- Signup/Login
- View and search books
- Add to wishlist
- Place orders and view order history

### 🛒 Seller
- Add new books
- Manage their own listings
- View and manage orders

### 🛠 Admin
- View all users and sellers
- Manage books and orders across the platform
- Admin-specific dashboard

---

## 🧱 Tech Stack

| Category    | Tech Used                      |
|-------------|--------------------------------|
| Frontend    | React.js (with Vite)           |
| Styling     | CSS                            |
| Backend     | Node.js, Express.js            |
| Database    | MongoDB                        |
| Runtime     | Node.js                        |

---

## 📁 Project Structure

Booknest-Project/
│
├── Backend/
│ ├── Admin/
│ ├── Seller/
│ ├── db/
│ ├── config.js
│ ├── server.js
│ └── addSampleBooks.js
│
├── Frontend/
│ ├── public/
│ ├── src/
│ │ ├── Admin/
│ │ ├── Seller/
│ │ ├── User/
│ │ ├── Components/
│ │ ├── App.jsx / main.jsx
│ │ └── *.css, *.jsx files
│
├── package.json
└── vite.config.js


## 🔧 Installation & Setup

### 1️⃣ Clone the repo

```bash ```
git clone https://github.com/Sambasiva-Rao13/Booknest-Project.git   
cd Booknest-Project 

2️⃣ Setup Backend
cd Backend
npm install
# configure MongoDB connection in config.js
node server.js

3️⃣ Setup Frontend
cd Frontend
npm install
npm run dev

✅ Future Enhancements
Authentication using JWT

Add book ratings and reviews

Implement pagination and search filters

Role-based routing protection


🤝 Contributors
Ch Samba Siva Rao - Full Stack Developer

Open to contributions! Feel free to fork and submit a pull request.

