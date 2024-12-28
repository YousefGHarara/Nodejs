const { Router } = require("express");
const {authController} = require("../Controllers")

const router = Router();

router.post("/signup", authController.signup)
.post("/login", authController.login)

module.exports = router