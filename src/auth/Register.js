import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
import { useNavigate } from "react-router-dom";
  
  export default function Register() {
    const navigate = useNavigate();
    return (
      <Container
        maxWidth="md"
        sx={{ display: "flex", alignItems: "center", height: "100vh" }}
      >
        <Grid container>
          <Grid item md={6}>
            <Paper
              square
              sx={{ bgcolor: "primary.main", color: "primary.contrastText",height:'100%', display:'flex',alignItems:'center'}}
            >
              <Box sx={{ p: 5, textAlign: "center" }}>
                <Box sx={{ textAlign: "center" }}>
                  <svg
                    width="50"
                    height="50"
                    viewBox="-10.5 -9.45 21 18.9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                      <ellipse rx="10" ry="4.5"></ellipse>
                      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                    </g>
                  </svg>
                </Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "600" }}>
                  CHAT APP
                </Typography>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </p>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper
              square
              sx={{height:'100%', display:'flex', alignItems:'center', flexDirection:'column' }}
            >
              <Box sx={{p:5}}>
              <h1>Register</h1>
              <TextField fullWidth id="name" label="Full Name" variant="outlined" sx={{mb:3}}/>
              <TextField fullWidth id="email" label="Email" variant="outlined" sx={{mb:3}}/>
              <TextField
                fullWidth
                id="password"
                label="Password"
                variant="outlined"
                sx={{mb:3}}
              />
              
              <Button fullWidth variant="contained" sx={{ py: 2 }}>
                Register
              </Button>
              </Box>
              <Box sx={{textAlign:'right', pr:'1'}}>
                <Typography variant="body2">
                  Already have an account <Button onClick={()=>navigate('/')}> Login</Button>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
  