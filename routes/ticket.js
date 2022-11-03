const {Router}= require("express")
const { TicketModel } = require("../models/ticket.model")
const jwt = require('jsonwebtoken');
const ticketRouter= Router()



ticketRouter.get("/",async(req,res)=>{
    //  let {status,}= req.query
    let {userId}= req.body
  
    // res.send(req.body)
       
      if(userId){

          let ticket= await TicketModel.find({userId})
          res.send({"message": ticket})
      }else{
    
        res.send({"message": "login first"})
      }
    
    
      
  })



  ticketRouter.post("/create", async(req,res)=>{

     console.log(req.body)
    
   
          let {category,title,message,userId}= req.body
          let newTicket= new TicketModel({
             userId,
             category,
             title,
              message

          })
           await newTicket.save()
            res.send({"message":newTicket})
       
})

module.exports={
    ticketRouter
}