const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const socket = require("./socket");
const userController = require("./controller/user");
const connectMongoDB = require("./config/db");
app.use("/user",userController);
const server = http.createServer(app);

connectMongoDB()
.then(()=>{
    server.listen(5000, () => {
        socket(server);
        console.log("server is running");
    });
}).catch((err)=>console.log(err));
