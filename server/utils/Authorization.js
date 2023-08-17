const jwt=require("jsonwebtoken")



const Authentication=(req,res,next)=>{
    const token=req.header('Authorization')?.split(' ')[0];
    if(!token){
        return res.status(401).json({
            error:"Unauthorized",
        })
    }

    // verify user with jwt
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({
                error:"Forbidin",
            })
        }
        req.user=user;
    })
    next();


}

module.exports={
    Authentication,
}