const { Router } = require("express");
const { models } = require("mongoose");
//const authController=require('../controllers/authController')
const authController = require("../controllers/authController");

const router = Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.login);
router.get("/mkp", (req, res) => {
  res.json({ msg: "This is CORS-enabled for a Single Route" });
});
//router.post('/login', authController.login_post);

module.exports = router;
