import { Paper } from "@mui/material";
import SideBar from "./sidebar";
import ChatBox from "./mainchat";
import Profile from "./profile";
import socket from "./socket";
import { useEffect } from "react";
const Chat = () =>{
    useEffect(()=>{

    },[]);
    return (
        <Paper square elevation={0} sx={{height:'100vh', display:'flex'}}>
            <SideBar/>
            <ChatBox/>
            <Profile/> 
        </Paper>
    )
}
export default Chat;