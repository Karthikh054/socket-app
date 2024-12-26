import {
  Alert,
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
  
  export default function Register() {
    const navigate = useNavigate();
    const [formError,setFormError] = useState();
    const {
      register,
      handleSubmit,
      formState: {errors},
    } = useForm();

    const onSubmit = (data) =>{
      axios.post("http://localhost:5000/user/register",data)
      .then((res)=>{
        localStorage.setItem("token",res.data.data);
        const user = jwtDecode(res.data.data);
        localStorage.setItem("user",JSON.stringify(user));
        navigate("/app",{state: user});
      })
      .catch((err)=>{
        setFormError(err.response.data);
      });
    }
    const token = localStorage.getItem("token");
    useEffect(() => {
      if(token) navigate("/app");
    },[]);
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
              <Box sx={{p:5}} component="form" onSubmit={handleSubmit(onSubmit)}>
                {formError && (
                  <Alert sx={{mb:3}} severity="error">{formError.msg}</Alert>
                )}
                
              <Typography variant="h5" sx={{mb:2, fontWeight:"500",textTransform:"uppercase"}}>Register</Typography>
              <TextField fullWidth id="name" label="Full Name" variant="outlined" sx={{mb:3}} {...register("name",{
                required:"This field is required",
              })} error={!!errors.name} helperText={errors.name && errors.name.message}/>
              <TextField fullWidth id="email" label="Email" variant="outlined" sx={{mb:3}} {...register("email",{
                required:"This field is required",
                pattern:{
                  value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                }
              })} error={!!errors.email} helperText={errors.email && errors.email.message}/>
              <TextField
                fullWidth
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                sx={{mb:3}}
                {...register("password",{
                  required:"This field is required",
                })}
                error={!!errors.password} helperText={errors.password && errors.password.message}
              />
              
              <Button type="submit" fullWidth variant="contained" sx={{ py: 2 }}>
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
  