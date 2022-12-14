const mongoose=require("mongoose");

const Schema = mongoose.Schema; 

const userSchema = new Schema({
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
    address:{
        type:String,
        require:true,
        unique:true
    }
});

module.exports=mongoose.model('User',userSchema)