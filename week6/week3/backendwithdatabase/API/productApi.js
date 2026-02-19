import exp from "express";
import { ProductModel } from "../models/productModel.js";

// create a mini-express server

export const productApp = exp.Router();

//get product data
productApp.get("/products", async (req, res) => {
    //find all products
    const products = await ProductModel.find();
    //response
    res.status(200).json({ message: "products", products });
});

productApp.get("/products/:id", async (req, res) => {
    //get obj id
    const objID = req.params.id;
    //find product by id
    const productObj = await ProductModel.findById(objID);
    //response
    res.status(200).json({ message: "product details", productObj });
});

//create new product data in db
productApp.post("/products", async (req, res) => {
    //load product details
    const productObj = req.body;
    try {
        //create product
        const newProduct = await ProductModel.create(productObj);
        //response
        res.status(201).json({ message: "product has been created successfully", payload: newProduct });
    } catch (err) {
        res.status(500).json({ message: "error creating product", error: err.message });
    }
});



// update an existing product 
productApp.put("/products/:id", async (req, res) => {
    //load product details
    let id = req.params.id;
    let updatedProduct = req.body;
    //update product
    let newProduct = await ProductModel.findByIdAndUpdate(id, { ...updatedProduct }, { new: true, runValidators: true });
    //response
    res.json({ message: "product updated successfully", newProduct })
});

