const Booking= require("../models/bookingScehma")

exports.getBookings= async(req,res)=>{
    const booking=await Booking.find({}).sort({createdAT:-1});
    res.status(200).json(booking)
};


exports.setBookings= async(req,res)=>{
    const {name,nuofpeople}=req.body;
    try{
        const booking =await Booking.create({
            name,nuofpeople,
        });
        res.status(200).json(booking);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
    res.json({msg:"Post a new Booking"})
   
};