const mongoose = require("mongoose");
const PATH = "mongodb+srv://hkarthik054:Asdf@cluster0.1qe7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectMongoDB = async ()=>{
    try{
        await mongoose.connect(PATH);
    }catch(error){
        console.log(error);
    }
}

module.exports = connectMongoDB;
