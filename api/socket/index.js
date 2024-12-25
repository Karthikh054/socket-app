const socket = require("socket.io");

const onlineUsers = [];

const addUser = (user) => {

};

const socketInit = (server) => {
    const io = socket(server,{
        cors:{
            origin: "http://localhost:3000",
        },
    });

    io.on("connection",(socket) => {
        socket.on("ADD_USER", (user)=>{
            addUser(user, socket.id);
            io.emit("USER_ADDED", onlineUsers);
        })
    })
};

module.exports = socketInit;