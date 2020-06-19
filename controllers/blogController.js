const mongoose = require("mongoose")
const shortid = require('shortid')

const blogModel = mongoose.model('Blogs');


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
            //res.send("missing man")
            res.status(404).send(
                {
                    "error": "Missing mandatory fields",
                    "errorMessage": err
                }

           )
        }
        else { 

            res.status(201).send(result); 
        }    })


}
let getAllBlogs = (req, res) => {
    blogModel.find().exec((error, result) => { 
        res.send(result)
    })

}
let getBlogById = (req, res) => { 
    blogModel.findById({ _id: req.params.blogId }).exec((error, result) => {
        if (error) {
            res.status(404).send({ "error": error })
        }
        else { 
            res.status(200).send(result)
        }
    })

}
let getBlogByAuthor = (req, res) => { 
    blogModel.find({ author: req.params.author }).exec((error, result) => {
        if (error) {
            res.status(404).send({ "error": error })
        }
        else { 
            res.status(200).send(result)
        }
    })

}
let getBlogByCategory = (req, res) => { 
    blogModel.find({ category: req.params.category }).exec((error, result) => {
        if (error) {
            res.status(404).send({ "error": error })
        }
        else { 
            res.status(200).send(result)
        }
    })

}
let deleteBlog = (req, res) => {
    blogModel.deleteOne({ _id:req.params.blogId}).exec((err, result) => {
        if (err) {
            res.status(404).send({ "error": err })
        }
        else {
            res.status(200).send(
                
                {
                    "message": "Blog is deleted successfully"
                })
        }
    })
        

}
let increaseViewCount = (req, res) => { 
    blogModel.findById({_id:req.params.blogId}).exec((err, result) => {
        if (err) {
            res.status(404).send({ "error": err })
        }
        else {
            console.log('view'+result.views)
            result.views += 1;
            result.save();
            res.status(200).send(result)
        }
    })
}
let editBlog = (req, res) => { 
    let updatedData = req.body;
    blogModel.updateOne({ _id: req.params.blogId },updatedData).exec((err, result) => { 
        if (err) { 
            res.send(err)
        }
        else {
      
            res.send(result)
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