const express = require('express');
const appConfig= require('../config/appConfig')
const blogController =require('./../controllers/blogController');

let blogs=(app)=>{
    app.get('/example', blogController.examplefn)
    app.post(appConfig.apiVersion+'/create',blogController.createBlog)
}
module.exports={
    readRoute:blogs
}
