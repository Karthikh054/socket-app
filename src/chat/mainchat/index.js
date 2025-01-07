import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import ChatArea from './ChatArea'
import Footer from './Footer'

export default function ChatBox({roomData,handleSendMsg, allMsg, user, handleDelete, setReplyMsg, replyMsg}) {
  return (
    <Box sx={{width:'50vw', display:'flex', height:'100%',flexDirection:'column'}}>
      {roomData.room ? <> 
      <Header roomData={roomData}/>
      <ChatArea allMsg={allMsg} user={user} handleDelete={handleDelete} setReplyMsg={setReplyMsg}/>
      <Footer handleSendMsg={handleSendMsg} replyMsg={replyMsg} setReplyMsg={setReplyMsg}/>
      </>: <>please select a user to chat</>}

    </Box>
  )
}
