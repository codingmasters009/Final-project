import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Login() {
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
              <h2 style={headerStyle}>Sign In</h2>
              <Typography gutterBottom>Please Fill Valid Information</Typography>
            </Grid>
            <form style={formStyle} method="POST">
              
              <TextField type={'email'} variant="standard" fullWidth label='Email' name='email'/>
              <TextField type={'password'} variant="standard" fullWidth label='Password' name='password'/>

      
              <Button type='submit' variant='contained' color='success'>Sign In</Button>
            
              
            </form>
            
          </Paper>
        </Grid>
      )
}

export default Login