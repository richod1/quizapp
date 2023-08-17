const express=require("express")
const cors=require("cors")
const morgan=require("morgan")
const port=3000
require("dotenv").config()
const app=express()
const {conn}=require("./database/connection")
const router=require("./routes/route")


/**express middleware */
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))


conn(); //database connection

/**test endpoint */

app.get("/api",(req,res)=>{
    res.status(200).json({msg:"api on set"})
})

/**route endpoint */

app.use('/api/v1',router);

/***server port */
app.listen(port,(err)=>{
    if(err) throw new Error("server is asleep")
    console.log(`server is up on port :${port}`)
})