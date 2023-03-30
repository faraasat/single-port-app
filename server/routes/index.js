const { Router } = require("express");

const router = Router();

// handle get reuest on route /api/name
router.get("/name", (_, res) => {
  return res.status(200).json({ name: "Farasat Ali" });
});

// handle get reuest on route /api/greet
router.get("/greet", (_, res) => {
  return res.status(200).json({ greet: "Hello there!!" });
});

module.exports = router;
