import exp from "express"
import { UserModel } from "../model/user-model.js"
import { hash,compare} from "bcrypt"
import { ProductModel } from "../model/product-model.js"
export const userRoute = exp.Router()


//create user
userRoute.post('/users', async (req, res) => {

    //get user from req
    let userObj = req.body
    //run validator without creating new document
    await new UserModel(userObj).validate()
    //hash password
    let hashedPassword = await hash(userObj.password, 12)
    userObj.password = hashedPassword
    //create user
    let newUser = UserModel(userObj)
    //save the user 
    await newUser.save({ validateforSave: false })
    //response
    res.status(201).json({ message: "user created", payload: newUser })

})

// add product to cart
userRoute.put("/cart/user-id/:uid/product-id/:pid", async (req, res) => {
  try {
    const userId = req.params.uid;
    const prodId = req.params.pid;

    // check user
    const userObj = await UserModel.findById(userId);
    if (!userObj) {
      return res.status(404).json({ message: "user not found" });
    }

    // check product
    const prodObj = await ProductModel.findById(prodId);
    if (!prodObj) {
      return res.status(404).json({ message: "product not found" });
    }

    // try to push product if not exists
    let modifiedUser = await UserModel.findOneAndUpdate(
      { _id: userId, "cart.product": { $ne: prodId } },
      { $push: { cart: { product: prodId, quantity: 1 } } },
      { new: true }
    ).populate("cart.product", "productName price");

    // if already exists → increment quantity
    if (!modifiedUser) {
      modifiedUser = await UserModel.findOneAndUpdate(
        { _id: userId, "cart.product": prodId },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true }
      ).populate("cart.product", "productName price");
    }

    res.status(200).json({
      message: "product added to cart successfully",
      modifiedUser
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});


//read user data with cart details
userRoute.get('/users/:id', async (req, res) => {
    //read user id
    let Userid = req.params.id

    //find user
    //populate is an aggeration function which creates a pipeline i.e used to fetch the data 
    // from other collections by taking reference as an argunment
    let user = await UserModel.findById(Userid).populate("cart.product", "productName price")

    //res
    res.status(200).json({ message: "user", payload: user })

})
