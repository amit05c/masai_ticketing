const {Router}= require("express")
const { UserModel } = require("../models/user.modes")
const jwt = require('jsonwebtoken');
require('dotenv').config()


const userRoutes= Router()
userRoutes.get("/",(req,res)=>{
    res.send("This is home")
})

userRoutes.post("/signup",async(req,res)=>{
    let {name,email,password}= req.body

          const newUser= new UserModel({name,email,password})
            await newUser.save()
            res.send({"message":"successfully registered"})
    
    
    
})


userRoutes.post("/login",async(req,res)=>{
    let {email,password}= req.body
    let user= await UserModel.findOne({email,password})
    if(user){

        var token =  jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        // console.log(token)
         res.send({
            message: "login successful",
            token
         })

       }else{
          res.send({"Error":"someting error"})
       
       }

    
})


module.exports={
    userRoutes
}