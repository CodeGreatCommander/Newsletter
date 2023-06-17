const {send}=require('./email_sender')
const massmail=(email,params)=>{
    for(mail of email){
        console.log(mail);
        send({to:email,subject:params.subject,html:params.html,text:params.text});
    }
};
module.exports={massmail};