import React from 'react'
import  {Avatar, Button, Grid}  from '@mui/material'
import { deepOrange} from '@mui/material/colors';

function AdminManu() {
  
  return (
    <Grid container spacing={0} padding={3} item xs={12} >
        <Grid container justify="flex" item xs={2}  centered>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>AD</Avatar>
        </Grid>
        <Grid item xs={8}   container justify="flex" >
        <a href='/'>
          <Button variant="text">Create Tour</Button>
        </a>
        <a href='/seetour'>
        <Button variant="text">See Tour</Button>
        </a>
        <a href='userdetail'>
        <Button variant="text">User Details</Button>
        </a>
        <a>

        </a>
            
            
            {/* <Button variant="text">Blog</Button> */}
            <Button variant="text" color='success'>Bookings</Button>
            
        </Grid>
        
        <Grid item xs={2}  container justifyContent="flex-end">
            <Button variant="text" color='warning'>logout</Button>
        </Grid>
    </Grid>
  )
}

export default AdminManu