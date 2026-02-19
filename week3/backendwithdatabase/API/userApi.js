import exp from 'express'
import { UserModel } from "../models/userModel.js"

// create a mini-express server
export const userApp = exp.Router()


// user-api routes
// To read user data from db
//create user api
userApp.get('/users', async (req, res) => {
    try {
        let users = await UserModel.find()
        //send res
        res.status(200).json({ message: "users", users })
    } catch (err) {
        res.status(500).json({ message: "error fetching users", error: err.message })
    }
})

//read user by id
userApp.get('/users/:id', async (req, res) => {
    //get objid
    let objID = req.params.id;
    try {
        //find user in obj
        let userObj = await UserModel.findById(objID)
        if (!userObj) {
            return res.status(404).json({ message: "user not found" })
        }
        //send res
        res.status(200).json({ message: "reading user by id", userObj })
    } catch (err) {
        res.status(500).json({ message: "error reading user", error: err.message })
    }
})

//create user
userApp.post('/users', async (req, res) => {
    //get new user from req
    const newUser = req.body;
    try {
        const doc = await UserModel.create(newUser);
        res.status(201).json({ message: "user created successfully", payload: doc });
    } catch (err) {
        res.status(400).json({ message: "error creating user", error: err.message });
    }
})

//update user by id
userApp.put('/users/:id', async (req, res) => {
    //get obj id from paramaeter
    let objID = req.params.id;
    //get modified user from req
    let modifiedUser = req.body;
    try {
        //make update
        let latestUser = await UserModel.findByIdAndUpdate(objID, modifiedUser, { new: true })
        if (!latestUser) {
            return res.status(404).json({ message: "user not found" })
        }
        //send res
        res.status(200).json({ message: "user modified successfully", latestUser })
    } catch (err) {
        res.status(500).json({ message: "error modifying user", error: err.message })
    }
})


//delete user 
userApp.delete('/users/:id', async (req, res) => {
    //get obj id from paramaeter
    let objID = req.params.id;
    try {
        //delete user by id
        let deletedUser = await UserModel.findByIdAndDelete(objID)
        if (!deletedUser) {
            return res.status(404).json({ message: "user not found" })
        }
        //send res
        res.status(200).json({ message: "user deleted successfully", payload: deletedUser })
    } catch (err) {
        res.status(500).json({ message: "error deleting user", error: err.message })
    }
})
