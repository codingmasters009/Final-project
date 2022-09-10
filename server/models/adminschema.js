const mongoose  = require("mongoose")

const Schema=mongoose.Schema;

const tourSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    day:{
        type:Number,
        require: true
    },
    agerange:{
        type: String,
        require:true
    },
    cost:{
        type:Number,
        require:true
    },
    operator:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }

});


module.exports=mongoose.model('Tour',tourSchema)