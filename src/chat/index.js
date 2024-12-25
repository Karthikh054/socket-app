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
    const {state} = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if(!state) navigate("/");
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
        }
    },[isConnected]);

    return (
        <Paper square elevation={0} sx={{height:'100vh', display:'flex'}}>
            <SideBar user={state}/>
            <ChatBox/>
            <Profile user={state}/> 
        </Paper>
    )
}
export default Chat;