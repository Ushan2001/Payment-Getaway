const express = require("express");
const { generateHash } = require("../controllers/payment-controller");

const router = express.Router();

router.post("/generate-hash", generateHash);

module.exports = router;
