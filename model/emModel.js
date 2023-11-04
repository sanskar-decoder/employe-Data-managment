const { default: mongoose } = require("mongoose");

const data= new mongoose.Schema({
    employeid:String,
    name:String,
    age:Number,
    image:String,
    location:String,
    salary:String,
    date:String,
})

module.exports=mongoose.model("employerecord",data);