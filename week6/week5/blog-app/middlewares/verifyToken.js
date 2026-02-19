import jwt from "jsonwebtoken"
import {config} from "dotenv"
config()
export const verifyToken=async(req,res,next)=>{
    //read token from req
    let token = req.cookies.token;
    console.log("token:",token)
    if(!token)
    {
        return res.status(401).json({message:"token is not present"})
    }
    //verify the validatiy of the toke
    let decodedToken = jwt.verify(token,process.env.JWT_SECRET)

    //forward req to next middleware/route
    next()
}