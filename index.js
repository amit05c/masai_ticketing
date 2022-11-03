const express= require("express")
const {connection} = require("./config/db")
const { authentication } = require("./middleware/authentication")
const { ticketRouter } = require("./routes/ticket")
const {userRoutes}= require("./routes/user")
var cors = require('cors')
const PORT= process.env.PORT || 8080
const app= express()
app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to mock11")
})
app.use("/user",userRoutes)
app.use(authentication)
app.use("/ticket",ticketRouter)

app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("Connected")
    }
    catch(err){
       console.log(err)
    }
})