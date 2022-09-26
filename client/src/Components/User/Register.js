import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


function Register() {
  const paperStyle = {
    padding: '30px 20px',
    width: 300,
    margin: '20px auto',
    align: 'center'
  }
  const headerStyle = {
    margin: 0
  }

  const avatarStyle = {
    backgroundColor: 'green'
  }
  const [reg, setreg]= useState({
    name:"",email:"",phonenum:"",gender:"",password:""
  });
  // let name, value
  const handleInPuts = (e)=>{
      const { value, id } = e.target
       console.log(value,id)
      setreg({ ...reg, [id]: value })

  }
  const Reg= async(e)=>{
    e.preventDefault();
    const {name,email,phonenum,gender,password,}=reg;
    const res = await fetch("http://localhost:5000/api/reg",{
  
      method: "POST",
      headers: {
        "Content-Type": "application/json"
   },
      body:JSON.stringify({
        name,email,phonenum,gender,password,
      })
    });
    const data = await res.json();
    if(data.status === 400  || ! data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Success");
      console.log("Registration Success");
    }
  }

  const formStyle = {
    padding: '5px 5px'
  }
  return (
    <Grid align='center' padding={8}>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign up</h2>
          <Typography gutterBottom>Please Fill Valid Information</Typography>
        </Grid>
        <form method='POST' style={formStyle}> 
          <TextField id='name' autoComplete='off' variant="standard" fullWidth label='Name' onChange={handleInPuts} value={reg.name}/>
          <TextField id='email' type="email" onChange={handleInPuts} value={reg.email} variant="standard" fullWidth label='Email' />
          <TextField id='phonenum' onChange={handleInPuts} value={reg.phone} variant="standard" fullWidth label='Phone Number' />
          <TextField id='gender' onChange={handleInPuts} value={reg.gender} variant="standard" fullWidth label='Gender' />
          <TextField id='password' onChange={handleInPuts} value={reg.password} variant="standard" fullWidth label='Password' />
          <TextField id='name' variant="standard" fullWidth label='confirm Password' />
        </form>
        <Grid align='center'>
          <Button onClick={Reg} type='submit' variant='contained' color='success'>Sign Up</Button>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Register