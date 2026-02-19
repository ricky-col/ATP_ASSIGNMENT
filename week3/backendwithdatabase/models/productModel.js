import { Schema, model } from "mongoose";

//create product schema 
const productSchema = new Schema({
    pid: {
        type: String,
        required: [true, "product id is required"],
        unique: true
    },
    productName: {
        type: String,
        required: [true, "product name is required"],
        unique: true
    },
    price: {
        type: Number,
        required: [true, "product price is required"],
        unique: true
    }
},{
    strict:"throw",
    timestamps:true
});

//create product model with that schema
export const ProductModel = model("product", productSchema);