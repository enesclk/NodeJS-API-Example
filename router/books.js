const { json } = require("express");
const express = require("express");
// const rateLimit = require("express-rate-limit");
const router = express.Router();
const books = [
  {
    id: 1,
    name: "Pride and Prejudice.",
  },

  {
    id: 2,
    name: "To Kill A Mockingbird.",
  },

  {
    id: 3,
    name: "The Great Gatsby.",
  },

  {
    id: 4,
    name: "The Hitchhiker's Guide to the Galaxy",
  },
];


router.get("/", function (req, res, next) {
  res.json(books);
});

module.exports = router;