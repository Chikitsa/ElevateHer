const express = require("express");
const cors=require('cors')

const templates=require("./data/templates");


const app=express();
app.use(cors());


app.get('/templates',(req,res)=>{
    res.json(templates);
})

app.get('/',(req,res)=>{
    res.send("Hello Worsdasdld");
})

http://localhost:4000/

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})