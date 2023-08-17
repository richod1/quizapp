const mongoose=require("mongoose")


/**database connection */

const conn=()=>{
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connected to database')
    
}).catch(err=>console.log('Failed to connect db',err))
}

module.exports={
    conn,
}