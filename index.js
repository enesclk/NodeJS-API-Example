const express = require("express");
const posts = require("./router/posts.js");
const users = require("./router/users.js");
const books = require("./router/books.js");
const app = express();
const port = 3000;

//returns the string Hello World when / is visited
app.get("/", (req, res) => {
  res.send("Welcome to main page");
});

// app.use(rateLimiter);

app.use("/posts", posts);
app.use("/users", users);
app.use("/books", books);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });