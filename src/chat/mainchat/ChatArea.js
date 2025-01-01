import { Avatar, Box, Chip, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ChatArea({allMsg, user}) {
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
          <Paper sx={item.sender._id === user._id ? {width:"100%",p:1.5,bgcolor:'#ccc'} : {width:"100%",p:1.5}} >
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
              <IconButton size='small'>
              <ReplyIcon fontSize='small'/>
            </IconButton>
            <IconButton size='small' color='error'>
              <DeleteOutlineIcon fontSize='small'/>
            </IconButton>
              </Box>
          </Box>
          </Paper>
          </Box>
        </ListItem>
        ))}
      {/* <ListItem sx={{mb:2}}>
        <Box sx={{display:'flex', width:'80%'}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Paper sx={{width:"100%",p:1.5}}>
        <ListItemText
        sx={{m:0}}
          primary="Vikas Kumar"
          secondary={
            
              <Typography
                variant="caption"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
              
            
          }
        />
        <Box mt={1} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography variant='body2'>
                12.20 PM
            </Typography>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            <IconButton size='small'>
            <ReplyIcon fontSize='small'/>
          </IconButton>
          <IconButton size='small' color='error'>
            <DeleteOutlineIcon fontSize='small'/>
          </IconButton>
            </Box>
        </Box>
        </Paper>
        </Box>
      </ListItem>
      <ListItem sx={{flexDirection:'row-reverse', mb:2}}>
        <Box sx={{display:'flex', width:'80%', flexDirection:'row-reverse'}}>
        <ListItemAvatar sx={{display:'flex', flexDirection:'row-reverse'}}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Paper sx={{width:"100%",p:1.5, bgcolor:'#ccc'}}>
        <ListItemText
        sx={{m:0}}
          primary="Vikas Kumar"
          secondary={
            
              <Typography
                variant="caption"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography>
              
            
          }
        />
        <Box mt={1} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography variant='body2'>
                12.20 PM
            </Typography>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            <IconButton size='small'>
            <ReplyIcon fontSize='small'/>
          </IconButton>
          <IconButton size='small' color='error'>
            <DeleteOutlineIcon fontSize='small'/>
          </IconButton>
            </Box>
        </Box>
        </Paper>
        </Box>
      </ListItem> */}
      </List>
      
    </Box>
  )
}
