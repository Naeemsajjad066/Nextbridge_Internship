import express from "express";

const app=express()

app.get("/users",(req,res)=>{
    res.send("User is calling you")
})
app.get("/users/:id",(req,res)=>{
    console.log(req.params);
    res.send(req.params)
})

app.get("/products/:id",(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send({params:req.params,query:req.query})
})
app.listen(3000,()=>{
    console.log("Server is running on port:3000");
})