import {Schema,model} from "mongoose"

const ProductSchema = new Schema({
    productName:
    {
        type:String,
        required:[true,"product name is required"]
    },
    price:
    {
        type:Number,
        required:[true,"price is required"]
    },
    brand:{
        type:String,
        required:[true,"procut brand is required"]
    }
},{
    strict:"throw",
    timestamps:true,
    versionKey:false
})

//export model
export const ProductModel = model('product',ProductSchema)
