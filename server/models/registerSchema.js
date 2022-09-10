const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const registerSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }

})

module.exports=mongoose.model('Reg',registerSchema)