const express = require("express");
const router = express.Router();
const User = require("../models/model.js");


// router.route("/").get((req, res) => {
//   res.status(200).send("Welcome to tejas gawande");
// });

router.post("/user/create_account", async (req, res) => {
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

router.get("/user/display_account", async (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((error) => {
      console.log(error);
    });
});

router.post("/user/delete_account", async (req, res) => {
  try {
    console.log(req.body);
    const userid = req.body.userid;
    await User.findByIdAndDelete(userid);
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/user/update", async (req, res) => {
  try {
    console.log(req.body);
    const updateUser = await User.findOneAndUpdate(
      { _id: req.body.user._id },
      req.body.user
    );
    console.log("updateUser ",updateUser);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      error: error,
    });
  }
});

//here is get request for paginated users
router.get("/user/paginated", async(req,res) =>{
 const allUsers = await User.find({});
 const page = parseInt(req.query.page);
 const limit = parseInt(req.query.limit);

 const startIndex = (page-1)*limit;
 const lastIndex= (page) * limit;

//getting the page 
const results = {}
results.totalUsers = allUsers.length;
results.pageCount = Math.ceil(allUsers.length/limit);

if(lastIndex < allUsers.length){
results.next = {
  page: page + 1
}
}

if(startIndex > 0){
results.prev = {
  page: page - 1
}
}

 results.result = allUsers.slice(startIndex,lastIndex);
  res.json(results)
})


module.exports = router;
