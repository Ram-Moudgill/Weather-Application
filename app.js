const express= require("express");
const path= require("path");
const ejs =require("ejs");
const { response } = require("express");
const port =process.env.PORT || 3000;
const app=express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/src/views'));
app.get("/",(req,res)=>
{
    res.render('index');

})
app.get("/weather",(req,res)=>
{
    res.render('weather');

})
app.listen(port,()=>
{
    console.log(`server is listeing on http://localhost:${port}`)
})