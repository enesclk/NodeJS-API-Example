const { json } = require("express");
const express = require("express");
const rateLimit = require("express-rate-limit");
// const responseTime = require('response-time');
const cors = require("cors");

const router = express.Router();
const posts = [
  {
    id: 1,
    author: "Lilian",
    title: "Stock market",
    body: "Post 1",
  },

  {
    id: 2,
    author: "Tom",
    title: "Covid 19",
    body: "Post 2",
  },

  {
    id: 3,
    author: "Vincent",
    title: "Django APIs",
    body: "Post 3",
  },

  {
    id: 4,
    author: "Cindy",
    title: "Node.js Streams",
    body: "Post 4",
  },
];

var rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 min duration in milliseconds
  max: 5,
  message: "You exceeded 5 requests in 1 min limit!",
  headers: true,
})

router.use(rateLimiter);
// router.use(responseTime());

router.use(function (req, res, next) {
  console.log(req.ip);
  if (req.ip !== '::1') { // Wrong IP address
    res.status(401);
    return res.send('Permission denied');
  }
  next(); // correct IP address, continue middleware chain
});

// router.use(cors(), function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

router.get("/", function (req, res, next) {
  res.json(posts);
});



module.exports = router;