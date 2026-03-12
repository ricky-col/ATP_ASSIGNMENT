//create mini express app
import express from "express"
import {userModel} from "../models/UserModel.js"

export const userApp = express.Router()

//user api routes
//create route
//read all the users
//read a user by id
//update a user by id
//delete a user by id


userApp.post("/user", async (req, res) => {
  try {
    const newUserDoc = new userModel(req.body);
    const savedUser = await newUserDoc.save();
    res.status(201).json({ message: "User created", payload: savedUser });
  } catch (err) {
    if (err.code === 11000) {
      res.status(409).json({ message: "Duplicate user" });
    } else {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
});
// userApp.post("/users", async (req, res) => {
//     try {
//         const newUser = req.body
//         const newUserDocumnet = new userModel(newUser)
//         let user = await newUserDocumnet.save()

//         res.status(201).json({
//             message: "User created",
//             payload: user
//         })
//     }
//     catch (err) {

//         // Duplicate key error
//         if (err.code === 11000) {
//             return res.status(409).json({
//                 message: "User already exists"
//             })
//         }

//         // Other errors
//         res.status(500).json({
//             message: "Something went wrong",
//             error: err.message
//         })
//     }
// })

//read all users
userApp.get("/users",async(req,res)=>{
    //read all users
    let usersList = await userModel.find()
    //send res
    res.status(200).json({message:"users",payload:usersList})

})

//read a user by id
userApp.get("/users/:id",async(req,res)=>{
    //read user based on id
    let userid = req.params.id;
    //find user by id
    let user = await userModel.findOne({_id:userid,status:true})
    //check user
    if(!user)
    {
        return res.status(404).json({message:"user not found"})
    }
    //send response
    res.status(200).json({message:"user",payload:user})
})


//delete user by id
userApp.delete("/users/:id",async(req,res)=>{
    //read userid based on id
    let userId = req.params.id;
    //find user and change status to false
    let user = await userModel.findByIdAndUpdate(userId,{$set:{status:false}})
    //check if not user
    if(!user)
    {
        return res.status(404).json({message:"user not found"})
    }
    //respponds
    res.status(200).json({message:"user removed",payload:user})
})

//activate user(change status to true)
userApp.patch("/users/:id",async(req,res)=>{

    let userId = req.params.id;
    //find user and change status to false
    let user = await userModel.findByIdAndUpdate(userId,{$set:{status:true}},{new:true})    
    //respponds
    res.status(200).json({message:"user activated",payload:user})
})
//PUT(change all the fields) and PATCH(change fields partially)


// //update user by id

// import express from "express";
// import { userModel } from "../models/UserModel.js";

// export const userApp = express.Router();

// // Create user
// userApp.post("/user", async (req, res) => {
//   try {
//     const newUser = new userModel(req.body);
//     const savedUser = await newUser.save();

//     res.status(201).json({
//       message: "User created successfully",
//       payload: savedUser
//     });

//   } catch (err) {

//     // Duplicate email error
//     if (err.code === 11000) {
//       return res.status(409).json({
//         message: "Email already exists"
//       });
//     }

//     // Validation errors
//     if (err.name === "ValidationError") {
//       return res.status(400).json({
//         message: err.message
//       });
//     }

//     res.status(500).json({
//       message: "Something went wrong"
//     });
//   }
// });

// // Get all users
// userApp.get("/users", async (req, res) => {
//   const users = await userModel.find();
//   res.status(200).json({ message: "Users list", payload: users });
// });