require("dotenv").config();
const Express = require("express");
// const dotenv  = require("dotenv");
const cors = require("cors");
const router = require('./routes/route.js');
const connectDb = require('./utils/connection.js')

// dotenv.config();
const app = Express();
app.use(cors());

app.use("/api/auth",router);

app.get("/",(req,res) =>{
   res.send("Hii from tejas")
})

connectDb().then(() =>{
app.listen(process.env.PORT,() =>{
    console.log(`server is running on ${process.env.PORT}`);
})});