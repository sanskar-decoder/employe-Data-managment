const mong =require('mongoose');
mong
.connect("mongodb://127.0.0.1:27017/saidham")
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err.message))
