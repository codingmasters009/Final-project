import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Addtour() {
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
    const [tour, settour] = useState({
       img:"", title: "", day: "", agerange: "", cost: "", operator: "", description: ""
    });
    // let name, value
    const handleInPuts = (e) => {
        const { value, id } = e.target
        console.log(value, id)
        settour({ ...tour, [id]: value })

    }
    const Add = async (e) => {
        e.preventDefault();
        const { img,title, day, agerange, cost, operator, description } = tour;
        const res = await fetch("http://localhost:5000/api/admin", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                img,title, day, agerange, cost, operator, description,
            })
        });
        const data = await res.json();
        if (data.status === 400 || !data) {
            window.alert("Invalid Information");
            console.log("Invalid Information");
        } else {
            window.alert("Tour Added Success");
            console.log("Tour Added Success");
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
                    <h2 style={headerStyle}>Add Tour</h2>
                    <Typography gutterBottom>Please Fill Valid All Information</Typography>
                </Grid>
                <form method='POST' style={formStyle}>
                <TextField id='img' variant="standard" fullWidth label='img-uri' onChange={handleInPuts} value={tour.img} />

                    <TextField id='title' variant="standard" fullWidth label='Title' onChange={handleInPuts} value={tour.title} />
                    <TextField id='day' onChange={handleInPuts} value={tour.day} variant="standard" fullWidth label='days' />
                    <TextField id='agerange' onChange={handleInPuts} value={tour.agerange} variant="standard" fullWidth label='Age Range' />
                    <TextField id='cost' onChange={handleInPuts} value={tour.cost} variant="standard" fullWidth label='Cost' />
                    <TextField id='operator' onChange={handleInPuts} value={tour.operator} variant="standard" fullWidth label='Operator' />
                    <TextField id='description' label="Description" multiline maxRows={50} value={tour.description} onChange={handleInPuts} variant="filled" />
                </form>
                <Grid align='center'>
                    <Button onClick={Add} type='submit' variant='contained' color='success'>Add Tour</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default Addtour