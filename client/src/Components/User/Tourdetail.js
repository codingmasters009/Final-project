import {React, useEffect, useState, useMemo} from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';


function Tourdetail() {
    
const [getdata,setdata]=useState([]);

useEffect(() => {
    axios.get("http://localhost:5000/api/admin")
      .then(res => {
        setdata(res.data)
        console.log(res.data);
      })
  }, [])
  
  const row = useMemo(
    () => getdata.map((row, index) => ({ ...row, id: row._id })),
    [getdata]
  );

  const paperStyle = {
    padding: '30px 20px',
    width: 700,
    margin: '20px auto',
    
  }
  
  return(
    
    <>
    { getdata.map(({_id,title,description,cost,imguri}) => (
        <Paper container spacing={0} padding={2}  item xs={4} style={ paperStyle}>
    <Card>

      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        container justifyContent="flex-end"
      />
         <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align='right'>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" align='right'>
          RS{cost}
        </Typography>
      </CardContent>  
            
      <CardActions justifyContent="flex-end">
        <Button size="small" color='success' >Book Now</Button>
        
      </CardActions>
      
    </Card></Paper>))}</>
  )
}

export default Tourdetail