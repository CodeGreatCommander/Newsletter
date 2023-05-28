const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}
const express=require("express")
const app=express()
const port=3000;
app.use(cors(corsOptions))
app.post("/email",(req,res)=>{
    console.log("server")
    const {addemail}=require('./database/pushEmail')
    addemail(req.headers)
    res.send(true);
})
app.listen(port);