const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config();
const app=express();

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  app.listen( process.env.PORT,()=>{
        console.log("connect to the port", process.env.PORT);
    });    

})
.catch((error)=>{
    console.log(error)
});


