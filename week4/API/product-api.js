import exp from "express"
import { ProductModel } from "../model/product-model.js"
import { hash } from "bcrypt"
export const prodRoute = exp.Router()

//route to create a new product
prodRoute.post('/products', async (req, res) => {
    //get product from req
    let Productobj = req.body;
    //create product 
    let newProduct = new ProductModel(Productobj)
    await newProduct.save()
    //response
    res.status(201).json({ message: "successfully created product", payload: newProduct })
})

prodRoute.get('/products', async (req, res) => {
    let productList = await ProductModel.find({});
    res.json({productList})
})



