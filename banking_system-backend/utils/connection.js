const mongoose = require("mongoose");


// const URI = "mongodb://127.0.0.1:27017/banking_system";

const URI ="mongodb+srv://tejugawande25:Tejas@2510@cluster0.f8tsgi6.mongodb.net/banking_system01?retryWrites=true&w=majority";

const connectDb = async() =>{
    try{
        await mongoose.connect(URI);
        console.log('connection is successful.');
    }catch(error){
        console.log('database connection is failed.')
        process.exit(0);
    }
}

module.exports = connectDb;