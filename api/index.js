const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const userController = require("./controller/user");
const connectMongoDB = require("./config/db");
app.use("/user",userController);
connectMongoDB.then(()=>{
    app.listen(5000, ()=>{
        console.log("server is running");
    });
}).catch((err)=>console.log(err));
