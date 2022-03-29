const { json } = require("express");
const express = require("express");
const rateLimit = require("express-rate-limit");
// const responseTime = require("response-time");

const router = express.Router();
const users = [
  {
    id: 1,
    name: "Jack",
  },

  {
    id: 2,
    name: "Jack",
  },

  {
    id: 3,
    name: "John",
  },

  {
    id: 4,
    name: "Jonathan",
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
    if (req.ip !== 'localhost') { // Wrong IP address
      res.status(401);
      return res.send('Permission denied');
    }
    next(); // correct IP address, continue middleware chain
  });

router.get("/", function (req, res, next) {
  res.json(users);
});



module.exports = router;