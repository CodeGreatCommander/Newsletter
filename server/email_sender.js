const nodemailer=require('nodemailer')
const {google}=require('googleapis');
const ClIENT_ID='',CLIENT_SECRET='',REDIRECT_URI='https://developers.google.com/oauthplayground',REFRESH_TOKEN=''
const html=`<h1>JUST TRYING </h1><p>try this</p>`;
const oAuth2Client=new google.auth.OAuth2(ClIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})
const send=async (params)=>{
    try{const accessToken=await oAuth2Client.getAccessToken();
    const transporter=nodemailer.createTransport({
        service:'gmail',
        port:465,
        secure:true,
        auth:{
            type:'OAuth2',
            user:'emailtestinf@gmail.com',
            clientId:ClIENT_ID,
            clientSecret:CLIENT_SECRET,
            refreshToken:REFRESH_TOKEN,
            accessToken:accessToken            
        }
    });
    const info=await transporter.sendMail({
        from:'emailtestinf@gmail.com',
        to:params.to,
        subject:params.subject,
        html:params.html,
        text:params.text
    })
    console.log("Message Sent:"+ info.messageId);}
    catch(e){console.log(e);}
}
//send().catch(e=>{console.log(e)});
module.exports={send};