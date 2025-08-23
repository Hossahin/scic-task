# Next.js Product Management App

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat\&logo=next.js)](https://nextjs.org/)
[![NextAuth.js](https://img.shields.io/badge/Auth-NextAuth.js-blue?style=flat\&logo=auth0)](https://next-auth.js.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=flat\&logo=mongodb)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat\&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 📖 Project Overview

This is a simple **Next.js 15 (App Router)** application featuring **public and protected routes**. Users can browse products, view product details, log in with **NextAuth.js**, and add products through a protected dashboard.

---

## 🚀 Core Features

* **Landing Page (/)**

  * Navbar, Hero, Product Highlights, Footer
  * Navigation to Login & Products
  * Public access

* **Login with NextAuth (/login)**

  * Google or credential login
  * Redirects to `/products` after login

* **Product List (/products)**

  * Public access
  * Displays all products with `name, description, price`
  * Each has a **Details** button

* **Product Details (/products/\[id])**

  * Public access
  * Shows full details of a selected product

* **Protected Page: Add Product (/dashboard/add-product)**

  * Accessible only for logged-in users
  * Product form to add new items to the database
  * Unauthenticated users are redirected to `/login`

---

## ⚡ Enhancements

* ✅ Loading spinner on form submission
* ✅ Toast messages after product add

---

## 🛠️ Tech Stack

* **Frontend**: [Next.js 15 (App Router)](https://nextjs.org/docs/app)
* **Authentication**: [NextAuth.js](https://next-auth.js.org/)
* **Database**: [MongoDB](https://www.mongodb.com/)
* **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```
/app
├── (public pages)
│   ├── page.jsx                 # Landing page
│   ├── products
│   │   ├── page.jsx             # Product list
│   │   └── [id]/page.jsx        # Product details
│   └── login/page.jsx           # Login page
│
├── dashboard
│   └── add-product/page.jsx     # Protected page

```

---

## ⚙️ Setup & Installation

### 1. Clone Repository

```bash
git clone https://github.com/Hossahin/scic-task.git
cd scic-task
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
```

### 4. Run Development Server

```bash
npm run dev
```

Visit 👉 [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 📌 Route Summary

| Route                    | Access        | Description                       |
| ------------------------ | ------------- | --------------------------------- |
| `/`                      | Public        | Landing page with sections        |
| `/login`                 | Public        | Login with NextAuth               |
| `/products`              | Public        | Product list page                 |
| `/products/[id]`         | Public        | Product details page              |
| `/dashboard/add-product` | Protected     | Add product form (requires login) |
| `/api/products`          | Public API    | Fetch products                    |

---


## 📎 Submission

* **Live Site (Vercel):** [https://scic-task.vercel.app/](https://scic-task.vercel.app/)

---

## 👨‍💻 Author

Developed with ❤️ by [Hossahin Islam](https://github.com/Hossahin)
