const mongoose = require("mongoose");
const schema = mongoose.Schema; 

const userSchema = new schema({
   name:String,
   lastname:String,
   age:Number,
   email:{type:"string" , unique:true},
   status:{type:"string" , default :"admin"}
   
  });
  const User= mongoose.model('User', userSchema);
  module.exports= User ;