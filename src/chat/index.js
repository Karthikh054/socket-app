import { Paper } from "@mui/material";
import SideBar from "./sidebar";
import ChatBox from "./mainchat";
import Profile from "./profile";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
const PATH = "http://localhost:5000";

const Chat = () =>{
    const socketRef = useRef();
    const [isConnected, setConnected] = useState();
    const [onlineUsers, setOnlineUseres] = useState([]);
    const [roomData, setRoomData] = useState({
        room: null,
        receiver: null,
    });
    const [allMsg, setAllMsg] = useState([]);
    const [replyMsg, setReplyMsg] = useState(null);
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
            socketRef.current.on("USER_ADDED",(data) => {
                setOnlineUseres(data);
            });

            socketRef.current.on("RECEIVED_MSG", (data) => {
                setAllMsg((prevState) => [...prevState, data]);
            });
            socketRef.current.on("DELETED_MSG", (data) => {
                setAllMsg((prevState) => 
                    prevState.filter((item)=>item._id != data.msg._id)
                );
            });
            return () => socketRef.current.disconnect();
        }
    },[isConnected]);
    const handleSendMsg = (msg)=>{
        if(socketRef.current.connected){
            let sender = state;
            sender.socketId = socketRef.current.id;
            const data = {
                msg,
                receiver:roomData.receiver,
                sender,
            };
            if(replyMsg){
                data.replyMsg = replyMsg;
            }
            socketRef.current.emit("SEND_MSG",data);
            setAllMsg((prevState) => [...prevState, data]);
            setReplyMsg(null);
        }
    }
    const handleDelete = (id) =>{
        axios.delete(`http://localhost:5000/message/${id}`)
        .then((res)=>{
            if(socketRef.current.connected){
                const data = {
                    msg : res.data.data,
                    receiver:roomData.receiver,
                };
                socketRef.current.emit("DELETE_MSG",data);
                setAllMsg((prevState) => 
                    prevState.filter((data)=>data._id != res.data.data._id)
                );
            }
        }).catch((err) =>{
          console.log(err);
        });
    };
    return (
        <Paper square elevation={0} sx={{height:'100vh', display:'flex'}}>
            <SideBar user={state} onlineUsers={onlineUsers} roomData={roomData} setRoomData={setRoomData} setAllMsg={setAllMsg}/>
            <ChatBox roomData={roomData} handleSendMsg={handleSendMsg} allMsg={allMsg} user={state} handleDelete={handleDelete} setReplyMsg={setReplyMsg} replyMsg={replyMsg}/>
            <Profile user={state}/> 
        </Paper>
    )
}
export default Chat;