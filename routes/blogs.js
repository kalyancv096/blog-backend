const express = require('express');
const appConfig= require('../config/appConfig')
const blogController =require('./../controllers/blogController');

let blogs = (app) => {
    app.get(appConfig.apiVersion + '/all', blogController.getAllBlogs)
    /**
 * @api {get} /all Retrieve all blogs
 * @apiName get all blogs
 * @apiGroup Blogs
 *
 

 * @apiSuccessExample {json} Success-Response:
                 {
    "error": false,
    "message": "blogs are listed",
    "status": 200,
    "data": [
        {
            "title": "my blog2",
            "views": 0,
            "tags": [],
            "_id": "5eec375986bc296110a70865",
            "blogId": "D8fUsC5Mk",
            "description": "My first blog",
            "bodyHtml": "any HTML content",
            "isPublised": true,
            "category": "comedy",
            "author": "kalyan",
            "created": "2020-06-19T03:56:09.148Z",
            "lastModified": "2020-06-19T03:56:09.148Z",
            "__v": 0
        },]
    }
 */
    app.post(appConfig.apiVersion + '/create', blogController.createBlog)
 /**
 * @api {POST} /create blog
 * @apiName Create a blogs
 * @apiGroup Blogs
 * * @apiParam {String}  title Title of blog.
 * * @apiParam {String}  description Description of blog.
 * * @apiParam {String}  bodyHtml Body of blog.
 * * @apiParam {Boolean}  isPublised Boolean value to define is blog is published.
 * * @apiParam {String}  category category of blog.
 * * @apiParam {String}  author Author of blog.
  * * @apiParam {String}  tags Tags defined for blog.

 
 * @apiSuccessExample {json} Success-Response:
             {
    "error": null,
    "message": "Blog is created Successfully",
    "status": 201,
    "data": {
        "title": "timetest",
        "views": 0,
        "tags": [
            "humour",
            "comedy"
        ],
        "_id": "5ef01d45898ff24748bb6f89",
        "blogId": "SNtGK84Gh",
        "description": "My sample blog 2",
        "bodyHtml": "sai",
        "isPublised": true,
        "category": "devotional",
        "author": "lord",
        "created": "2020-06-22T02:53:57.010Z",
        "lastModified": "2020-06-22T02:53:57.010Z",
        "__v": 0
    }
}
 */



    app.get(appConfig.apiVersion+'/view/:blogId',blogController.getBlogById)
     /**
 * @api {get} /view/:blogId Retrieve blog by ID
 * @apiName get blog by ID
 *  * * @apiParam {ID}  blogID ID of selected blog.
 * @apiGroup Blogs
 
 * @apiSuccessExample {json} Success-Response:
                 {
    "error": false,
    "message": "blogs are listed",
    "status": 200,
    "data": 
        {
            "title": "my blog2",
            "views": 0,
            "tags": [],
            "_id": "5eec375986bc296110a70865",
            "blogId": "D8fUsC5Mk",
            "description": "My first blog",
            "bodyHtml": "any HTML content",
            "isPublised": true,
            "category": "comedy",
            "author": "kalyan",
            "created": "2020-06-19T03:56:09.148Z",
            "lastModified": "2020-06-19T03:56:09.148Z",
            "__v": 0
        }
    }
 */
   
   
   
   
    app.get(appConfig.apiVersion + '/view/by/author/:author', blogController.getBlogByAuthor)
       /**
 * @api {get} /view/by/author/:author Retrieve blogs by author
 * @apiName get blog by Author
 *  * * @apiParam {String}  Author of selected blog.
 * @apiGroup Blogs
 
 * @apiSuccessExample {json} Success-Response:
                 {
    "error": false,
    "message": "Blog data",
    "status": 200,
    "data": [
        {
            "title": "my blog2",
            "views": 0,
            "tags": [
                "humour",
                "comedy"
            ],
            "_id": "5eece887ef891716fc75e37c",
            "blogId": "zETrmPNj4",
            "description": "My first blog",
            "bodyHtml": "any HTML content",
            "isPublised": true,
            "category": "comedy",
            "author": "karthik",
            "created": "2020-06-19T16:32:07.325Z",
            "lastModified": "2020-06-19T16:32:07.325Z",
            "__v": 0
        }
    ]
}
 */
   
   
   
    app.get(appConfig.apiVersion + '/view/by/category/:category', blogController.getBlogByCategory)
        /**
 * @api {get} /view/by/category/:category Retrieve blogs by category
 * @apiName get blog by category
 *  * * @apiParam {String}  Category Category of selected blog.
 * @apiGroup Blogs
 
 * @apiSuccessExample {json} Success-Response:
    {
    "error": false,
    "message": "Blog data",
    "status": 200,
    "data": [
        
        {
            "title": "my blog2",
            "views": 0,
            "tags": [
                "humour",
                "comedy"
            ],
            "_id": "5eec3f153910ff4e245f4c6a",
            "blogId": "nncXzadZL",
            "description": "My first blog",
            "bodyHtml": "any HTML content",
            "isPublised": true,
            "category": "comedy",
            "author": "kalyan",
            "created": "2020-06-19T04:29:09.136Z",
            "lastModified": "2020-06-19T04:29:09.136Z",
            "__v": 0
        },
        {
            "title": "my blog2",
            "views": 0,
            "tags": [
                "humour",
                "comedy"
            ],
            "_id": "5eece887ef891716fc75e37c",
            "blogId": "zETrmPNj4",
            "description": "My first blog",
            "bodyHtml": "any HTML content",
            "isPublised": true,
            "category": "comedy",
            "author": "karthik",
            "created": "2020-06-19T16:32:07.325Z",
            "lastModified": "2020-06-19T16:32:07.325Z",
            "__v": 0
        }
    ]
}
 */
  
  
  
  
    app.post(appConfig.apiVersion + '/:blogId/delete', blogController.deleteBlog)
    /**
 * @api {POST} /:blogId/delete blog
 * @apiName delete a blog
 * @apiGroup Blogs
 * * @apiParam {String}  ID of blog.
 * * 
 
 * @apiSuccessExample {json} Success-Response:
       {
    "error": false,
    "message": "Blog is deleted successfully",
    "status": 200,
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
 */

    
    
    app.post(appConfig.apiVersion + '/:blogId/count/view', blogController.increaseViewCount)
     /**
 * @api {POST} /:blogId/count/view
 * @apiName Count view of a blog
 * @apiGroup Blogs
 * * @apiParam {String}  ID of blog.
 * * 
 
 * @apiSuccessExample {json} Success-Response:
            {
    "error": false,
    "message": "View count is incremented successfully",
    "status": 200,
    "data": {
        "title": "my blog2",
        "views": 5,
        "tags": [
            "humour",
            "comedy"
        ],
        "_id": "5eec3f153910ff4e245f4c6a",
        "blogId": "nncXzadZL",
        "description": "My first blog",
        "bodyHtml": "any HTML content",
        "isPublised": true,
        "category": "comedy",
        "author": "kalyan",
        "created": "2020-06-19T04:29:09.136Z",
        "lastModified": "2020-06-19T04:29:09.136Z",
        "__v": 0
    }
}
 */

  

    app.post(appConfig.apiVersion + '/:blogId/edit', blogController.editBlog)
        /**
 * @api {POST} /:blogId/edit
 * @apiName edit a blog
 * @apiGroup Blogs
 * * @apiParam {String}  ID of blog.
 * * 
 
 * @apiSuccessExample {json} Success-Response:
         {
    "error": false,
    "message": "Blog data",
    "status": 200,
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
} */
}
module.exports={
    readRoute:blogs
}
