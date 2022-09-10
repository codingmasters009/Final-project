const express = require("express");
const adminrouter =express.Router();

const{
gettourdetails,
settourdetails,
updatetour,
deletetour,
}=require("../controllers/admincontroller")

adminrouter.get("/",gettourdetails);
adminrouter.post("/",settourdetails);
adminrouter.patch("/:id",updatetour);
adminrouter.delete("/:id",deletetour);


module.exports=adminrouter