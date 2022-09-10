const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BookingSchma = new Schema({
    name:{
        type:String,
        require:true
    },
    nuofpeople:{
        type:String,
        require:true
    }
    
})

module.exports=mongoose.model('Booking',BookingSchma)
