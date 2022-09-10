const Admin=require("../models/adminschema");


exports.gettourdetails = async(req,res)=>{
    const admin=await Admin.find({}).sort({createdAT:-1});
    res.status(200).json(admin)
};


exports.settourdetails= async(req,res)=>{
    const {title,day,agerange,cost,operator,description}=req.body;
    try{
        const admin =await Admin.create({
            title,day,agerange,cost,operator,description,
        });
        res.status(200).json(admin);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
    res.json({msg:"Post a new Tour"})
   
};

exports.updatetour=async(req,res)=>{
    try{
       const admin = await Admin.findById(req.params.id);
       Object.assign(tour,req.body);
       tour.save();
       res.send({data: admin}); 
    }
    catch{
        res.status(400).send({error:"Record is not found"});
    }
};

exports.deletetour=async(req,res)=>{
    try{
       const admin = await Admin.findById(req.params.id);
       await tour.remove();
       res.send({data: admin}); 
    }
    catch{
        res.status(400).send({error:"Record is not found"});
    }
};
