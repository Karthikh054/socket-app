import { Paper } from "@mui/material";
import SideBar from "./sidebar";
import ChatBox from "./mainchat";

const Chat = () =>{
    return (
        <Paper square elevation={0} sx={{width:'100vh'}}>
            <SideBar/>
            <ChatBox/>
            {/* <Profile/>  */}
        </Paper>
    )
}
export default Chat;