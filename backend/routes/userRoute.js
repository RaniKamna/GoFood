const express = require("express");
const {
  postuserdata,
  getuserdata,
  loginuser,
  authenticateToken,
} = require("../controllers/userController");
const userRouter = express.Router();
const { body, validationResult } = require("express-validator");

userRouter.post(
  "/createuser",
  // username must be an email
  body("email").isEmail(),
  // password must be at least 5 chars long
  body("password", "Invalid length of Password").isLength({ min: 5 }),
  body("name").isLength({ min: 5 }),
  postuserdata
);
userRouter.get("/getuser", getuserdata);
userRouter.post(
  "/login",
  // username must be an email
  body("email").isEmail(),
  // password must be at least 5 chars long
  body("password", "Invalid length of Password").isLength({ min: 5 }),
  loginuser
);

module.exports = userRouter;
