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
    console.log("this much done");
    const{send}=require('./email_sender')
    send({to:req.headers.email,subject:"Thanks for joining",html:`<h1>great meeting you`,text:'send from a great person'});
    res.send(true);
})
app.listen(port);