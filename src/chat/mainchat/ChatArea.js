import { Avatar, Box, Chip, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ChatArea({allMsg, user, handleDelete,setReplyMsg}) {

 

  return (
    <Box sx={{overflowY:"auto", flex: "1 0  0" , background:"#f9f9f9"}}>
        <Stack direction="row" justifyContent="center" py={2} sx={{position:'sticky', top:0, zIndex:2, background:"#f9f9f9"}}>
            <Chip label="Yesterday"></Chip>
        </Stack>
       <List sx={{p:0, overflowY:'auto', flex:'1 0 0'}}>
        {allMsg.map((item) =>(
          <ListItem sx={item.sender._id === user._id ? {flexDirection:'row-reverse', mb:2} : {mb:2}}>
          <Box sx={item.sender._id === user._id ? {display:'flex', width:'80%', flexDirection:'row-reverse'} : {display:'flex', width:'80%'}}>
          <ListItemAvatar  sx={item.sender._id === user._id ? {display:'flex', flexDirection:'row-reverse'} : ""}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <Paper sx={item.sender._id === user._id ? {width:"100%",p:1.5,bgcolor:'#ccc', mb:1} : {width:"100%",p:1.5, mb:1}} >
            {
              item.replyMsg &&
              <Paper sx={item.sender._id !== user._id ? {p:1.5,bgcolor:'#ccc'} : {p:1.5}} >
              
              <ListItemText
                sx={{m:0}}
                  primary={item.replyMsg.sender.name}
                  secondary={
                    
                      <Typography
                        variant="caption"
                        sx={{ color: 'text.primary', display: 'inline' }}
                      >
                        {item.replyMsg.msg}
                      </Typography>
                      
                    
                  }
                />
              </Paper>
            }
          <ListItemText
          sx={{m:0}}
            primary={item.sender.name}
            secondary={
              
                <Typography
                  variant="caption"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  {item.msg}
                </Typography>
                
              
            }
          />
          <Box mt={1} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <Typography variant='body2'>
                  12.20 PM
              </Typography>
              <Box sx={{display:'flex',justifyContent:'flex-end'}}>
              <IconButton size='small' onClick={()=>setReplyMsg(item)}>
              <ReplyIcon fontSize='small'/>
            </IconButton>
            {
              item.sender._id === user._id &&
            
            <IconButton size='small' color='error' onClick={() =>handleDelete(item._id)}>
              <DeleteOutlineIcon fontSize='small'/>
            </IconButton>
}
              </Box>
          </Box>
          </Paper>
          </Box>
        </ListItem>
        ))}
      
      </List>
      
    </Box>
  )
}
