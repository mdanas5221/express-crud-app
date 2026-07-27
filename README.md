# Express CRUD App

A simple CRUD (Create, Read, Update, Delete) application built with **Node.js**, **Express.js**, **EJS**, **UUID**, and **Method Override**. This project demonstrates the fundamentals of REST APIs and server-side rendering using Express.

## 🚀 Features

- Create new posts
- View all posts
- View a single post
- Edit existing posts
- Delete posts
- RESTful routing
- Dynamic routes using route parameters
- Server-side rendering with EJS
- Unique IDs generated using UUID
- Method Override for PATCH and DELETE requests

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS
- UUID
- Method Override
- HTML

## 📁 Project Structure

```
express-crud-app/
│
├── public/
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── view.ejs
│
├── app.js
├── package.json
└── README.md
```

## 📌 REST API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | /posts | Display all posts |
| GET | /posts/new | Show create post form |
| POST | /posts | Create a new post |
| GET | /posts/:id | View a single post |
| GET | /posts/:id/edit | Show edit form |
| PATCH | /posts/:id | Update a post |
| DELETE | /posts/:id | Delete a post |

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/express-crud-app.git
```

2. Navigate to the project folder

```bash
cd express-crud-app
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node app.js
```

or

```bash
nodemon app.js
```

5. Open your browser

```
http://localhost:3000/posts
```

## 📚 What I Learned

- Express.js Routing
- REST API Principles
- CRUD Operations
- Route Parameters
- Express Middleware
- EJS Templating
- Method Override
- UUID
- Form Handling
- Server-side Rendering

## 🎯 Future Improvements

- MongoDB Integration
- Mongoose
- User Authentication
- Validation
- Better UI
- Flash Messages
- Error Handling
- Responsive Design

## 👨‍💻 Author

**Md Anas**

---

⭐ If you found this project helpful, consider giving it a star.