import exp from "express"
import {connect} from "mongoose"
import {prodRoute} from "./API/product-api.js"
import {userRoute} from "./API/user-api.js"
import cookieParser from "cookie-parser"


// create HTTP server
const app = exp()
// use body-parser middleware
app.use(exp.json())
// use cookie-parser middleware
app.use(cookieParser())

// connect to mongoDB database
async function connectdb()
{
    try{
        await connect('mongodb://127.0.0.1:27017/ecommerce')
        console.log("Connected to MongoDB")
        app.listen(4000,()=>console.log("server running on port 4000....."))
    }
    catch(err){
        console.log("Error connecting to MongoDB",err)
    }
}

connectdb()
// forward req to specific apis
app.use('/product-api',prodRoute)
app.use('/user-api',userRoute)

// error handling middleware
app.use((err,req,res,next)=> {
    res.status(500).json({message:"Error occured",reason:err.message})
})