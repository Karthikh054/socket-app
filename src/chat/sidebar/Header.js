import { Avatar, Card, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Header({user}) {
  return (
    <>
      <Card sx={{bgcolor:"primary.light",borderRadius:0, color:"primary.contrastText"}}>
        <CardHeader 
        avatar={<Avatar>R</Avatar>}
        action={
            <IconButton aria-label='settings' sx={{color:"primary.contrastText"}}>
                <MoreVertIcon/>
            </IconButton>
        }
        title={user.name}
        subheader={<Typography variant='caption'>{user.email}</Typography>
        }
        />
      </Card>
    </>
  )
}
