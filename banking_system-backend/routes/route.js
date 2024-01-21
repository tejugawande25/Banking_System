const express = require("express");
const router = express.Router();
const User = require("../models/model.js");

// router.route("/").get((req, res) => {
//   res.status(200).send("Welcome to tejas gawande");
// });

router.post("/user/create_account", async(req, res) => {
  try {
    console.log(req.body);
    const user = User(req.body.user);
    await user.save();
    res.status(200).json({
      message: "ok",
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/user/display_account", async(req ,res) =>{
  User.find({})
  .then(users => res.json(users))
  .catch((error) =>{
    console.log(error);
  })
})

router.post("/user/delete_account", async(req, res) =>{
  try{
     console.log(req.body);
     const userid  = req.body.userid;
     await User.findByIdAndDelete(userid)
     res.send({status:"Ok",data:"Deleted"});
  }catch(error){
    console.log(error)
  }
})



module.exports = router;
