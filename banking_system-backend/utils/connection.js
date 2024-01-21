const mongoose = require("mongoose");


// const URI = "mongodb://127.0.0.1:27017/banking_system";

const URI ="mongodb+srv://tejugawande25:Tejas2510@banking-system.bpk2y1e.mongodb.net/banking-system?retryWrites=true&w=majority";

const connectDb = async() =>{
   mongoose.connect(URI,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
   }).then((connection)=>{
   //  console.log(connection);
   }).catch(err=>{
    console.log(err);
   })
}

module.exports = connectDb;