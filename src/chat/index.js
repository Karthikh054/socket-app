import { Paper } from "@mui/material";
import SideBar from "./sidebar";
import ChatBox from "./mainchat";
import Profile from "./profile";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
const PATH = "http://localhost:5000";

const Chat = () =>{
    const socketRef = useRef();
    const [isConnected, setConnected] = useState();
    const [onlineUsers, setOnlineUseres] = useState();
    const {state} = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if(!state) navigate("/");
        console.log("jhiiii", state);
        const socket = io.connect(PATH);
        socketRef.current = socket;
        socket.on("connect", () => {
            setConnected(true);
        });
        socket.off("disconnect", ()=>setConnected(false));
    },[]);

    useEffect(() => {
        if(isConnected){
            socketRef.current.emit("ADD_USER", state);
            socketRef.current.on("USER_ADDED",(data) => {
                setOnlineUseres(data);
            });
        }
    },[isConnected]);

    return (
        <Paper square elevation={0} sx={{height:'100vh', display:'flex'}}>
            <SideBar user={state} onlineUsers={onlineUsers}/>
            <ChatBox/>
            <Profile user={state}/> 
        </Paper>
    )
}
export default Chat;