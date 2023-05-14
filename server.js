const express= require("express")
const app=express();
 
require("dotenv").config();

const db_connect = require("./routes/db_connect") ;
db_connect() ; 
app.use(express.json());
app.use("/user", require ("./routes/user")) ; 
app.get(("/user"),(req,res)=>res.send("helloooooo")); 
app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("serveur is running")); 
 
