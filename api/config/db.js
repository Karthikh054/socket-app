const mongoose = require("mongoose");
const PATH = "mongodb://localhost:27017/chatAPI";

const connectMongoDB = ()=>{
    try{
        mongoose.connect(PATH);
        console.log("connected monogoose db");
    }catch(error){
        console.log(error);
    }
}

module.exports = connectMongoDB;
