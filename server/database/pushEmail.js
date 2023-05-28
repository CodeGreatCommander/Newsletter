const addemail=async(params)=>{
    const {email}=require("./schema.js");
    const data=await email.create({name:params.name,email:params.email});
    await data.save()
}
module.exports={addemail}