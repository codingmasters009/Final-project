const express = require("express")
const mongoose = require("mongoose")
const admin=require("./routers/admin")
const user=require("./routers/user")
const booking=require("./routers/booking")

require("dotenv").config();
const app=express();

app.use(express.json())
app.use((req, res,next)=>{
    console.log(req.path,req.method);
    console.log(res.path);
    next();
});
app.use("/api/admin",admin);
app.use("/api/user",user);
app.use("/api/booking",booking);

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  app.listen( process.env.PORT,()=>{
        console.log("connect to the DB on Port", process.env.PORT);
    });    

})
.catch((error)=>{
    console.log(error)
});