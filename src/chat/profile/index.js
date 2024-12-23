import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

export default function Profile() {
  return (
    <Box sx={{background:'#eee', width:'25vw', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
      <Avatar src="https://mui.com/static/images/avatar/2.jpg" sx={{width:'156px', height:'156px'}}/>
      <Typography variant='h4' sx={{textTransform:'uppercase', color:'primary.light', mt:3}}>
        Karthik
      </Typography>
      <Typography variant='subtitle1'>
        Frontend Developer
      </Typography>
      <Typography variant='body2'>
        hkarthik054@gmail.com
      </Typography>
    </Box>
  )
}
