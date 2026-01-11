const express = require("express");
const { userRegister, loginUser, perofile, logOut } = require("../controllers/auth.controllers");
const authMiddlware = require("../middleware/auth.middleware");
const router = express.Router();
router.post('/register', userRegister);
router.post('/login', loginUser)
router.post("/logout", logOut)
router.get('/perofile', authMiddlware, perofile)
module.exports = router
