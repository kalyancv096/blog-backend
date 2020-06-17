const express=require('express');
const config=require('./config/appConfig')
const fs=require('fs');
const appConfig = require('./config/appConfig');
const mongoose = require('mongoose');
let app= express();

const routePath='./routes';
fs.readdirSync(routePath).forEach(function(file){

    if(~file.indexOf('.js')){
        let routes = require(routePath+'/'+file);
        routes.readRoute(app)
    }
})
const modelPath = './models';
fs.readdirSync(modelPath).forEach(function(file){

    if(~file.indexOf('.js')){
         require(modelPath+'/'+file);
    }
})

app.listen(appConfig.PORT, (req,res)=>{
    console.log('App is running')
    mongoose.connect(appConfig.db.url,{useMongoClient: true})


})
mongoose.connection.on('error', function(err){
console.log(err)

})
mongoose.connection.on('open', function(err){

    if(err){
        console.log('error occured')
    }
    else
    {
       console.log('listening to database on 27017'); 
    }
})





