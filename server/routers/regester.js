const express = require("express");
const regrouter =express.Router();

const{
getUser,
newUser,
updateUser,
deleteUser,
}=require("../controllers/registercontroller")

regrouter.get("/",getUser);
regrouter.post("/",newUser);
regrouter.patch("/:id",updateUser);
regrouter.delete("/:id",deleteUser);


module.exports=regrouter