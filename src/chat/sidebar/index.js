import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import Header from "./Header"
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const SideBar = ({user, onlineUsers}) =>{
  
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Box sx={{width:"25vw",display:"flex",flexDirection:"column",height:"100%"}}>
            <Header user={user}/>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                variant="fullWidth"
            >
                <Tab icon={<ChatBubbleOutlineIcon fontSize="small"/>} sx={{minHeight:"inherit"}} iconPosition="start" value="0" label="Chat List"/>
                <Tab icon={<PersonIcon fontSize="medium"/>} sx={{minHeight:"inherit"}} iconPosition="start" value="1" label="User List" />
            </Tabs>
            {
                value == 0 && 
                    <List sx={{p:0, overflowY:'auto', flex:'1 0 0' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Vikas Kumar"
          secondary={
            
              <Typography
                variant="caption"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              
            
          }
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Vikas Kumar"
          secondary={
            
              <Typography
                variant="caption"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              
            
          }
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Vikas Kumar"
          secondary={
            
              <Typography
                variant="caption"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              
            
          }
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Vikas Kumar"
          secondary={
            
              <Typography
                variant="caption"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              
            
          }
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Vikas Kumar"
          secondary={
            
              <Typography
                variant="caption"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              
            
          }
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Vikas Kumar"
          secondary={
            
              <Typography
                variant="caption"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              
            
          }
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Vikas Kumar"
          secondary={
            
              <Typography
                variant="caption"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              
            
          }
        />
      </ListItem>
      <Divider component="li" />
    </List>
                
            }
            {
                value == 1 && <div>1</div>
            }
        </Box>
        
    )
}

export default SideBar;