import express from "express";
import sum from './sum.js';


const app = express();

app.get("/sum/:a/:b" ,async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        sum:sum(parseInt(a),parseInt(b))
    })
    
})

app.listen(8080,()=>{
    console.log("App is runing in port 8080");
})