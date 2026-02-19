//create http server
    //import express module
    import exp from 'express'
    //create HTTP server
    //import userAPI
    import { userapp } from "./API/user-api.js"
    import { productapp } from "./API/product-api.js"
    const app = exp()
    //assiGn port number
    app.listen(3000,()=> console.log("HTTP SERVER LISTENING ON PORT 3000..."))

    //body parsing middleware
    app.use(exp.json())

    app.use('/user-api',userapp)
    app.use('/product-api',productapp)

//g




