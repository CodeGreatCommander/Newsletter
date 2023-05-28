const addemail=async(params)=>{
    const {email}=require("./schema.js");
    const data=await email.create({name:params.name,email:params.email});
    await data.save()
    console.log("data saving work done")
}
module.exports={addemail}