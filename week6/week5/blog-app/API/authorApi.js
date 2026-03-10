import exp from "express"
import { ArticleModel } from "../models/articleModel.js"
import { register } from "../Services/authServices.js"
import { authenticate } from "../Services/authServices.js"
import { UserTypeModel } from "../models/userModel.js"
import { checkAuthor } from "../middlewares/checkauthor.js"
import { verifyToken } from "../middlewares/verifyToken.js"

export const authorRoute = exp.Router()

//register author
//create or register user (public)
authorRoute.post('/users', async (req, res) => {
    //get user obj from req
    let authorObj = req.body;
    //call register
    const newAuthorObj = await register({ ...authorObj, role: "AUTHOR" })
    //respose
    res.status(201).json({ message: "author created successfully", user: newAuthorObj })

})
//authenticate author(public)

//create article (protected route)
authorRoute.post('/articles',verifyToken,checkAuthor,async (req, res) => {
    //get article from req
    let article = req.body;
    //check for author using checkAuthor middleWARE
    //call create article document
    let articleDoc = new ArticleModel(article)
    //save article documnet
    let createdArticleDoc = await articleDoc.save()
    //response 
    res.status(201).json({ message: "article created successfully", payload: createdArticleDoc })
})
//read all articles of author (protected)
authorRoute.get('/articles/:authorId',verifyToken,checkAuthor,async(req,res)=>{
    //read author id
    let authorId = req.params.authorId;
   //check the author using checkAuthor middleWARE
    
    //read the articles by this author which are active
    let articles = await ArticleModel.find({author:authorId,isArticleActive:true}).populate("author","firstName email")
    //send response
    if(!articles)
    {
        res.status(404).json({message:"articles not found"})
    }
    res.status(200).json({message:"articles read successfully",payload:articles})
})
//edit article (protected)
authorRoute.put('/articles',verifyToken,checkAuthor,async(req,res)=>{
    //get the modified article
    let modifiedArticle = req.body;
    //find article
    let articleOfDb = await ArticleModel.findOne({_id:modifiedArticle.articleId,author:modifiedArticle.author})
    if(!articleOfDb)
    {
        res.status(404).json({message:"article not found"})
    }
    //update the article
    let updatedArticle = await ArticleModel.findByIdAndUpdate(modifiedArticle.articleId,{ 
        $set:{
            title:modifiedArticle.title,
            content:modifiedArticle.content,
            category:modifiedArticle.category
        }
    },{new:true})
    //send response updated article 
    res.status(201).json({message:"updated article successfully",payload:updatedArticle})


})


//delete article(soft delete) (protected)
authorRoute.put('/article',verifyToken,checkAuthor,async(req,res)=>{
    //get the article
    let deletedarticle = req.body;
    //find the article
    let articleofDb = await ArticleModel.findOne({_id:deletedarticle.articleId,author:deletedarticle.author})
    if(!articleofDb)
    {
        res.status(404).json({message:"article not found"})
    }
    //delete
    let deletedArticle = await ArticleModel.findByIdAndUpdate(deletedarticle.articleId,{
        $set:{
            isArticleActive:deletedarticle.isArticleActive
        }
    },{new:true})
        res.status(201).json({message:"deleted article successfully",payload:deletedarticle})
})
