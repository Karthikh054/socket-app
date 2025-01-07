import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon  from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

export default function Footer({handleSendMsg,replyMsg,setReplyMsg}) {
  const [msg, setMsg] = useState("");
  const handleChange = (e) =>{
    setMsg(e.target.value);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(msg){
      handleSendMsg(msg);
    }
    setMsg("");
  };
  return (
    <Box sx={{p:1, display:'flex', position:'relative'}}>
      {replyMsg && <Box sx={{position:'absolute', left:0, right:0, bottom:'57px', background:"#ddd",p:1, borderLeft:"4px solid", borderColor:"primary.light" }}>
        <Typography>{replyMsg.sender.name}</Typography><Typography variant='caption'>{replyMsg.msg}</Typography>
        <IconButton aria-label='close' sx={{position:'absolute', right:0, top:0}} onClick={() => setReplyMsg(null)}>
          <CloseIcon />
        </IconButton>
        
        </Box>}
        <Box sx={{display:"flex", alignItems:'center'}}>
      <Button sx={{minWidth:"auto", mr:1}}>
        <MoreVertIcon/>
      </Button>
      <Button sx={{minWidth:"auto", mr:1}}>
        <InsertEmoticonIcon/>
      </Button>
      </Box>
      <Box sx={{display:'flex', flex:1}} component="form" onSubmit={handleSubmit}>
        <TextField autoFocus placeholder='Type your message' size='small' sx={{"& .MuiInputBase-root":{
            borderRadius: 0, borderRight:0
        }}} fullWidth value={msg} onChange={handleChange}/>
        <Button  type='submit' sx={{borderRadius:'0', minWidth:"auto", height: "100%"}}>
            <SendIcon/>
        </Button>
      </Box>
      
    </Box>
  )
}
