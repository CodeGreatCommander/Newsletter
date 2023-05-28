const mongoose=require("mongoose");
const DBURL="Enter your mongoose collection";
mongoose.connect(DBURL).then(()=>{console.log("connection successful")},(e)=>{console.log(e)})
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
const email=mongoose.model("UserSchema",schema);
module.exports={email};