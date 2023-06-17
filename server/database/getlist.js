const getemail=async(params)=>{
    const {email}=require("./schema.js");
    const user = await email.find({}).exec();
    emaillst=[]
    // console.log(user)
    for(var i=0;i<user.length;i++){
        emaillst.push(user[i].email)
    } 
    return emaillst;
};
// getemail();
module.exports={getemail}