const express = require("express");
const bookingrouter =express.Router();

const{
getBookings,
setBookings,
}=require("../controllers/bookingController")

bookingrouter.get("/",getBookings);
bookingrouter.post("/",setBookings);

module.exports = bookingrouter
