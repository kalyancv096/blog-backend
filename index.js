const express=require('express');
const config=require('./config/appConfig')
const fs=require('fs');
const appConfig = require('./config/appConfig');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const routeValidator = require('./middlewares/routeValidation')
const authenticator=require('./middlewares/routeValidation')
require('./models/Blog');
let app = express();
app.use(bodyparser.json())
const modelPath = './models';
fs.readdirSync(modelPath).forEach(function(file){

    if (~file.indexOf('.js')) {
        console.log(modelPath + '/' + file);
         require(modelPath+'/'+file);
    }
})
const routePath = './routes';

fs.readdirSync(routePath).forEach(function(file){

    if(~file.indexOf('.js')){
        let routes = require(routePath+'/'+file);
        routes.readRoute(app)
    }
})
app.use(routeValidator.routeNotFound);



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





