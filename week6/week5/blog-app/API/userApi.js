import exp from "express"
import { register,authenticate } from "../Services/authServices.js"
import {verifyToken} from "../middlewares/verifyToken.js"
import { ArticleModel } from "../models/articleModel.js"
import { UserTypeModel } from "../models/userModel.js"
import { checkAuthor } from "../middlewares/checkauthor.js"


export const userRoute=exp.Router()

//create or register user
userRoute.post('/users',async(req,res)=>{
    //get user obj from req
    let userObj = req.body;
    //call register
    const newUserObj = await register({...userObj , role: "USER"})
    //respose
    res.status(201).json({message:"user created successfully",user:newUserObj})

})
//read all articles(protected route)
userRoute.get('/articles/:authorId',verifyToken,checkAuthor,async(req,res)=>{
    //get authorid
    let authorId = req.params.authorId;
    //read the articles by this author which are active
    let articles = await ArticleModel.find({author:authorId,isArticleActive:true}).populate("author","firstName email")
    if(!articles)
    {
        res.status(404).json({message:"no articles found"})
    }
    res.status(200).json({message:"articles",payload:articles})})



// add comment to article (protected)
userRoute.put("/users/:userId/article/:articleId",verifyToken,async (req, res) => {
      let { userId, articleId } = req.params;
      let comment  = req.body.comment;

      // check article
      let articleObj = await ArticleModel.findById(articleId);
      if (!articleObj || !articleObj.isArticleActive) {
        return res.status(404).json({ message: "Article not found" });}
      // check user
      let userObj = await UserTypeModel.findById(userId);
      if (!userObj) {
        return res.status(404).json({ message: "User not found" });}
      // create comment object
      let newComment = {user: userObj._id,comment: comment};
      // update article
      let modifiedArticle = await ArticleModel.findByIdAndUpdate(
        articleId,
        { $push: { comments: newComment } },
        { new: true, runValidators: true }
      );
      res.status(201).json({message: "Comment added successfully",payload: modifiedArticle});
    })
