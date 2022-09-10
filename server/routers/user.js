const express = require("express");
const userrouter =express.Router();

const{
getUser,
newUser,
updateUser,
deleteUser,
}=require("../controllers/usercontroller")

userrouter.get("/",getUser);
userrouter.post("/",newUser);
userrouter.patch("/:id",updateUser);
userrouter.delete("/:id",deleteUser);


module.exports=userrouter