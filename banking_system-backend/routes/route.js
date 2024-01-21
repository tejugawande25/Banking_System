const express = require("express");
const router = express.Router();
const home = require('../controllers/controller.js')



router.route("/").get((req ,res) =>{
    res
    .status(200)
    .send("Welcome to tejas gawande")
})

module.exports = router;