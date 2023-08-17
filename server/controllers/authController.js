const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const User=require("../models/userModel")




/**build auth:
 * verify user
 * add database
 * generate key to user
 */

/***authenticate user before api fetching */
const authApi=async(req,res)=>{
    const {username,password}=req.body;
    try{
        // database user fetch and verify!
        const user=await User.findOne({username});
        // compare pass of user
        if(!user || !bcrypt.compareSync(password,user.password)){
            return res.status(400).json({error:"Invalid Credentials"})
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(201).json({msg:"User granted successfully",data:token});

    }catch(err){
        res.status(500).json({msg:"User Auth failed!"})
    }
}

module.exports={authApi}