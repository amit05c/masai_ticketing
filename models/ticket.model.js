const mongoose= require("mongoose")

const ticketSchema= new mongoose.Schema({
    category: {type: String, require: true},
    title: {type: String, require: true},
    message: {type: String, require: true},
    userId:{type: String, require: true}
   
},
{
    versionKey:false,
    timestamps:true
}
)

const TicketModel= mongoose.model("ticket",ticketSchema)

module.exports={
    TicketModel
}