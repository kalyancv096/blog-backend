
const helloFunction=(req,res)=>{
    res.send('Hello world')


}
const exampleFunction=(req,res)=>{
res.send('example route')    
}
module.exports={
    hellofn: helloFunction,
    examplefn: exampleFunction
}