const mongoose = require("mongoose")
const shortid = require('shortid')

const blogModel = mongoose.model('Blogs');
const responseFormat = require('../Libs/responseLib');
const currentTime = require('../Libs/timeLib')
const helloFunction = (req, res) => {
    res.send('Hello world')


}
const createBlog = (req, res) => { 
    console.log('inside create blog')
    let today = Date.now()
    let tags;
    let generatedBlogId=shortid.generate()
    const newBlog = new blogModel({
        blogId: generatedBlogId,
        title: req.body.title,
        description: req.body.description,
        bodyHtml: req.body.bodyHtml,
        isPublised:true,
        category:req.body.category,
        author: req.body.author,
         created: today,
         lastModified:today

    })
    console.log(req.body.tags)
    tags = (req.body.tags != null && req.body.tags != undefined) ? req.body.tags.split(',') : []
   
    newBlog.tags = tags;
    newBlog.save((err, result) => { 
        if (err) {
            console.log('inside error')
         let apiResponse=   responseFormat.generate(err, "Failed to fetch blog details, Please check your internet connection", 500, null)
           console.log(apiResponse)
            res.send(apiResponse)
        }
        else if (responseFormat.checkRespone(result)) {
            let apiResponse=     responseFormat.generate(null, "No blog found",404 , result)
            res.send(apiResponse);
        }
        else {
           let apiResponse= responseFormat.generate(null, "Blog is created Successfully",201 , result)
            res.status(201).send(apiResponse);
        }
        })


}
let getAllBlogs = (req, res) => {
    blogModel.find().exec((error, result) => { 
      
        if (error) {
         let apiResponse=   responseFormat.generate(true, "Failed to fetch blog details, Please check your internet connection", 500, null)
           console.log(apiResponse)
            res.send(apiResponse)
        }
        else if (responseFormat.checkRespone(result)) {
            let apiResponse=     responseFormat.generate(true, "No blog found",404 , result)
            res.send(apiResponse);
        }
        else {
           let apiResponse= responseFormat.generate(false, "blogs are listed",200 , result)
            res.status(200).send(apiResponse);
        }
    })

}
let getBlogById = (req, res) => { 
    blogModel.findById({ _id: req.params.blogId }).exec((error, result) => {
        if (error) {
            let apiResponse=   responseFormat.generate(true, "Failed to fetch blog details, Please check your internet connection", 500, null)
              console.log(apiResponse)
               res.send(apiResponse)
           }
           else if (responseFormat.checkRespone(result)) {
               let apiResponse=     responseFormat.generate(true, "No blog found",404 , result)
               res.send(apiResponse);
           }
           else {
              let apiResponse= responseFormat.generate(false, "Blog data",200 , result)
               res.status(200).send(apiResponse);
           }
    })

}
let getBlogByAuthor = (req, res) => { 
    blogModel.find({ author: req.params.author }).exec((error, result) => {
        if (error) {
            let apiResponse=   responseFormat.generate(true, "Failed to fetch blog details, Please check your internet connection", 500, null)
              console.log(apiResponse)
               res.send(apiResponse)
           }
           else if (responseFormat.checkRespone(result)) {
               let apiResponse=     responseFormat.generate(true, "No blog found",404 , result)
               res.send(apiResponse);
           }
           else {
              let apiResponse= responseFormat.generate(false, "Blog data",200 , result)
               res.status(200).send(apiResponse);
           }
    })

}
let getBlogByCategory = (req, res) => { 
    blogModel.find({ category: req.params.category }).exec((error, result) => {
        if (error) {
            let apiResponse=   responseFormat.generate(true, "Failed to fetch blog details, Please check your internet connection", 500, null)
              console.log(apiResponse)
               res.send(apiResponse)
           }
           else if (responseFormat.checkRespone(result)) {
               let apiResponse=     responseFormat.generate(true, "No blog found",404 , result)
               res.send(apiResponse);
           }
           else {
              let apiResponse= responseFormat.generate(false, "Blog data",200 , result)
               res.status(200).send(apiResponse);
           }
    })

}
let deleteBlog = (req, res) => {
    blogModel.deleteOne({ _id:req.params.blogId}).exec((error, result) => {
        if (error) {
            let apiResponse=   responseFormat.generate(true, "Failed to fetch blog details, Please check your internet connection", 500, null)
              console.log(apiResponse)
               res.send(apiResponse)
           }
           else if (responseFormat.checkRespone(result)) {
               let apiResponse=     responseFormat.generate(true, "No blog found",404 , result)
               res.send(apiResponse);
           }
           else {
              let apiResponse= responseFormat.generate(false, "Blog is deleted successfully",200 , result)
               res.status(200).send(apiResponse);
           }
    })
        

}
let increaseViewCount = (req, res) => { 
    console.log(req.params.blogId)
    blogModel.findById({ _id: req.params.blogId }).exec((error, result) => {
        console.log(result)
        if (error) {
            let apiResponse=   responseFormat.generate(true, "Failed to fetch blog details, Please check your internet connection", 500, null)
              console.log(apiResponse)
               res.send(apiResponse)
           }
           else if (responseFormat.checkRespone(result)) {
               let apiResponse=     responseFormat.generate(true, "No blog found",404 , result)
               res.send(apiResponse);
           }
        else {
            result.views += 1; 
            result.save(function (error, result) { 
                if (error) {
                    let apiResponse = responseFormat.generate(True, "Response not found, check your internet connection", 500, error)
           
                    res.status(500).send(apiResponse);
                   
                }
                else if (result == '' || result == undefined || result == null) {
                    let apiResponse = responseFormat.generate(true, "Blog not found", 404, result)
           
                    res.status(404).send(apiResponse);
         
                }
                else { 
                    let apiResponse= responseFormat.generate(false, "View count is incremented successfully",200 , result)
           
                    res.status(200).send(apiResponse);
                }
                
            })
            
           }
    })
}
let editBlog = (req, res) => { 
    let updatedData = req.body;
    blogModel.updateOne({ _id: req.params.blogId },updatedData).exec((error, result) => { 
        if (error) {
            let apiResponse=   responseFormat.generate(true, "Failed to fetch blog details, Please check your internet connection", 500, null)
              console.log(apiResponse)
               res.send(apiResponse)
           }
           else if (responseFormat.checkRespone(result)) {
               let apiResponse=     responseFormat.generate(true, "No blog found",404 , result)
               res.send(apiResponse);
           }
           else {
              let apiResponse= responseFormat.generate(false, "Blog data",200 , result)
               res.status(200).send(apiResponse);
           }
    })
}
    

module.exports={
    createBlog: createBlog,
    getAllBlogs: getAllBlogs,
    getBlogById: getBlogById,
    getBlogByAuthor: getBlogByAuthor,
    getBlogByCategory: getBlogByCategory,
    deleteBlog: deleteBlog,
    increaseViewCount: increaseViewCount,
    editBlog:editBlog
}