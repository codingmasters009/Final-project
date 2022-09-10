const User=require("../models/userschema");

const getUser = async(req,res)=>{
    const user=await User.find({}).sort({createdAT:-1});
    res.status(200).json(user)
};


const newUser= async(req,res)=>{
    const {name,gender,age,email,address}=req.body;
    try{
        const user =await User.create({
            name,gender,age,email,address,
        });
        res.status(200).json(user);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
    res.json({msg:"Post a new User"})
   
}

const updateUser=async(req,res)=>{
    try{
       const user = await User.findById(req.params.id);
       Object.assign(user,req.body);
       user.save();
       res.send({data: user}); 
    }
    catch{
        res.status(400).send({error:"Record is not found"});
    }
};

const deleteUser=async(req,res)=>{
    try{
       const user = await User.findById(req.params.id);
       await user.remove();
       res.send({data: student}); 
    }
    catch{
        res.status(400).send({error:"Record is not found"});
    }
};

module.exports={getUser,newUser,updateUser,deleteUser};