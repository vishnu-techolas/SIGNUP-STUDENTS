const { Router } = require("express");
const authController = require("../controllers/auth.controller");

const authRoute = Router();

authRoute.get("/create-token", authController.createToken);
authRoute.get("/verify-token", authController.verifyToken);
authRoute.post("/signup", authController.studentSignup);

module.exports = authRoute;