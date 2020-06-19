const express = require('express');
const appConfig= require('../config/appConfig')
const blogController =require('./../controllers/blogController');

let blogs = (app) => {
    app.get(appConfig.apiVersion+'/all',blogController.getAllBlogs)
    app.post(appConfig.apiVersion + '/create', blogController.createBlog)
    app.get(appConfig.apiVersion+'/view/:blogId',blogController.getBlogById)
    app.get(appConfig.apiVersion+'/view/by/author/:author',blogController.getBlogByAuthor)
    app.get(appConfig.apiVersion+'/view/by/category/:category',blogController.getBlogByCategory)
    app.post(appConfig.apiVersion + '/:blogId/delete', blogController.deleteBlog)
    app.post(appConfig.apiVersion + '/:blogId/count/view', blogController.increaseViewCount)
    app.post(appConfig.apiVersion + '/:blogId/edit', blogController.editBlog)
}
module.exports={
    readRoute:blogs
}
