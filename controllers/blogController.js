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
const exampleFunction=(req,res)=>{
res.send('example route')    
}



module.exports={
    createBlog: createBlog,
    examplefn: exampleFunction
}