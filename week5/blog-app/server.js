import exp from "express"
import {connect} from "mongoose"
import {config} from "dotenv"
import { userRoute } from "./API/userApi.js";
import { authorRoute } from "./API/authorApi.js";
import { adminRoute } from "./API/adminApi.js";
import cookieParser from "cookie-parser";
import { commonRoute } from "./API/commonApi.js"


config() //process.env

const app = exp();
//add body parseer middleware
app.use(exp.json())

//cookie parser
app.use(cookieParser())
//connect API's
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)
app.use('/common-api',commonRoute)


//connect to database
const connectdb = async()=>{
{
    try{
    await connect(process.env.DB_URL)
    console.log("connected to database successfully")
    //create http server
    app.listen(process.env.PORT,()=>console.log("server listening"))}
    catch(err){
        console.log("error in connecting db server",err)
    }
}}
connectdb()


//dealing with invalid path
app.use((req,res,next)=>{
    //console.log(req.url)
    res.json({message:req.url + " " + "is invalid-path"});
})


//error handling middleware
app.use((err,req,res,next)=>{
    console.log("error found",err)
    res.json({message:"error",reason:err.message})
})



