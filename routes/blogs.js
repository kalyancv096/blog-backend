const express= require('express');
const blogController =require('./../controllers/blogController');
let blogs=(app)=>{
app.get('/hello',blogController.hellofn)
app.get('/example',blogController.examplefn)
}
module.exports={
    readRoute:blogs
}
