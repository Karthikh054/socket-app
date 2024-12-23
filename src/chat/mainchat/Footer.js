import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon  from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';

export default function Footer() {
  return (
    <Box sx={{p:1, display:'flex'}}>
        <Box sx={{display:"flex", alignItems:'center'}}>
      <Button sx={{minWidth:"auto", mr:1}}>
        <MoreVertIcon/>
      </Button>
      <Button sx={{minWidth:"auto", mr:1}}>
        <InsertEmoticonIcon/>
      </Button>
      </Box>
      <Box sx={{display:'flex', flex:1}}>
        <TextField placeholder='Type your message' size='small' sx={{"& .MuiInputBase-root":{
            borderRadius: 0, borderRight:0
        }}} fullWidth/>
        <Button  sx={{borderRadius:'0', minWidth:"auto", height: "100%"}}>
            <SendIcon/>
        </Button>
      </Box>
      
    </Box>
  )
}
