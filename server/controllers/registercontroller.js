const Register=require("../models/registerSchema");

const getUser = async(req,res)=>{
    const reg=await Register.find({}).sort({createdAT:-1});
    res.status(200).json(reg)
};


const newUser= async(req,res)=>{
    const {name,gender,age,email,password}=req.body;
    try{
        const reg =await Register.create({
            name,gender,age,email,password,
        });
        res.status(200).json(reg);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
    res.json({msg:"Post a new User"})
   
}

const updateUser=async(req,res)=>{
    try{
       const reg = await Register.findById(req.params.id);
       Object.assign(reg,req.body);
       reg.save();
       res.send({data: reg}); 
    }
    catch{
        res.status(400).send({error:"Record is not found"});
    }
};

const deleteUser=async(req,res)=>{
    try{
       const reg = await Register.findById(req.params.id);
       await reg.remove();
       res.send({data: reg}); 
    }
    catch{
        res.status(400).send({error:"Record is not found"});
    }
};

module.exports={getUser,newUser,updateUser,deleteUser};