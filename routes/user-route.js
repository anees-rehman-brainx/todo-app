const express = require('express');
const {register, login, changePassword,forgotPassword,resetPassword} = require('../controller/user-controller')

const router = express.Router();

router.get("/register", register);
router.get("/login", login);
router.get("/change-password", changePassword);
router.get("/forgot-password", forgotPassword);
router.get("/reset-password/:id/:token", resetPassword)


module.exports = router;
