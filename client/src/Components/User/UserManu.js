import React from 'react'
import { Avatar, Button, Grid } from '@mui/material'
import { deepOrange } from '@mui/material/colors';
function UserManu() {
  return (

    <Grid container spacing={0} padding={3} item xs={12} >
      <Grid container justify="flex" item xs={2} centered>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>US</Avatar>
      </Grid>
      <Grid item xs={8} container justify="flex" >

        <a href='/'>
          <Button variant="text">Home</Button>
        </a>
        <a href='/tourdetail'>
          <Button variant="text">See Tour</Button>
        </a>

      </Grid>
      <Grid item xs={2} container justifyContent="flex-end">
      <a href='/register'>
      <Button variant="text" color='success'>Register</Button>
      </a>
        <Button variant="text" color='warning'>logout</Button>
      </Grid>
    </Grid>

  )
}

export default UserManu