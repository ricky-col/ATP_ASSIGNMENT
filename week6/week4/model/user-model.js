import {Schema,model} from "mongoose"

//create car schema
const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref: 'product'//name of the product model
    },
    quantity:{
        type:Number,
        default:1
    }
})

//create a user schema
const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true //add to index
    },
    password:{
        type:String,
        required:[true,"passsword is required"],
        // minLength:[4,"min length is 4"],
        // maxLength:[10,"max length is 10"]
        //pattern:[]

    },
    cart:{
        type:[cartSchema]
    }

},{
    strict:"throw",
    timestamps:true
})

//create a usermodel
export const UserModel = model('user',UserSchema)
