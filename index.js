const express=require('express');
const config=require('./config/appConfig')
const fs=require('fs');
const appConfig = require('./config/appConfig');
let app= express();

const routePath='./routes';
fs.readdirSync(routePath).forEach(function(file){

    if(~file.indexOf('.js')){
        let routes = require(routePath+'/'+file);
        routes.readRoute(app)
    }
})
app.listen(appConfig.PORT, (req,res)=>{
    console.log('App is running')
})





