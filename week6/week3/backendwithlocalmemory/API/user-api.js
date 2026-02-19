import exp from "express"
//create a mini -express(seprate route)app
export const userapp = exp.Router()
//CREATE USER API(application proGRam interface) = (req handlers - route )
    //test local in memory data
    let users = [];
        //Get req handlinG route(read)
        userapp.get('/users',(req,res) => {
            //send users data
            res.status(200).json({Message:"all users",payload:users}) //message,payload
        })

        //Post req handlinG route(create)
        userapp.post('/users',(req,res)=>{
            //get user resource from req
            let newuser = req.body
            //console.log("new user",newuser)
            // insert newUser into users array
            users.push(newuser)
            //send res
            res.status(201).json({message:"user created",payload:users});
        })

        //PUt req HandlinG route(update)
        //put is update
        userapp.put('/users/',(req,res)=>{
            //get modified user from req
            let updateuser = req.body;;
            //find the user with id exists in array
            let userindex = users.findIndex(userobj=>userobj.id === updateuser.id)
            //if user not found send req as user not found
            if(userindex===-1)
            {
                return res.status(404).json({message:"user not found",payload:users})
            }
            // if user found then modify the user
            let newuser = users.splice(userindex, 1, updateuser)
            //send req as "user modified"
            res.status(200).json({message:"user modified",payload:users})
        })


        // read user by id
        userapp.get('/users/:id',(req,res)=>{
            //console.log(req.params)
            //read if from url parameters
            let userId = Number(req.params.id)
            //read user by this id
            let user = users.find(userobj=>userobj.id===userId);
            if(!user)
            {
                return res.status(404).json({message:"user not found"})
            }
            //let req.params
            res.status(200).json({"message":"user",payload:user})
        })
        //delete req handlinG route(delete)
        userapp.delete('/users/:id',(req,res)=>{
            //read user
            let id = Number(req.params.id);
            //find index
            let reqUserIdx = users.findIndex(user=>user.id===id)
            if(reqUserIdx === -1)
            {
                return res.status(404).json({"message":"user not found"})
            }
            let deleted_user = users.splice(reqUserIdx,1)
            res.status(201).json({ message :"user_deleted", deleted_user, payload: users})

        })







