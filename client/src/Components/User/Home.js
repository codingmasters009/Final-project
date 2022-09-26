import React from 'react'
import { Paper, Typography } from '@mui/material'
function Home() {
    const paperStyle = {
        padding: '30px 20px',
        width: 300,
        margin: '20px auto',
        align: 'center'
      }
  return (
    <>
    <Paper elevation={20} style={paperStyle}>
    <Typography>
        Welcome to the Tour And Fun Life
    </Typography>
    
    </Paper>
    </>
  )
}

export default Home