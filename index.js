const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let posts = [
  {
    id: uuidv4(),
    username: "anas",
    content: "I love coding.",
  },
  {
    id: uuidv4(),
    username: "mac",
    content: "I got selected for my first internship.",
  },
  {
    id: uuidv4(),
    username: "jack",
    content: "winners are always loosers who try one more time.",
  },
];

// INDEX ROUTE
app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

// CREATE NEW POST ROUTE
app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

// EDIT ROUTE
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("edit", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  let newContent = req.body.content;
  post.content = newContent;
  res.redirect("/posts");
});

// DELETE ROUTE
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/posts");
});

// VIEW ROUTE
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("view", { post });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
