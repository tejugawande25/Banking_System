const mongoose = require("mongoose");

//creating the schema for the database
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    accountnumber:{
        type:String,
        require:true
    },
    bankname:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    zip:{
        type:String,
        require:true
    }
    
});

//creating the usermodel or the collection name
const User  = new mongoose.Model("User",userSchema);

module.exports= User;