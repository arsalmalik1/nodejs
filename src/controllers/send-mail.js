const nodemailer = require("nodemailer");


const sendMail = async (req, res)=>{
  
     var smtpConfig = {
    host: 'premium289.web-hosting.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
    // user: 'sajid.linz@gmail.com',
    // pass: 'Linz12345'
    user: 'info@savordelivery.com',
    pass: '4]!h&0lzmUGt'
    },
    tls:{
        rejectUnAuthorized:true
        }
};
var transporter = await nodemailer.createTransport(smtpConfig);
    let details ={
    from: 'info@savordelivery.com', // sender address
    to: "arsalfree3@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  };
  console.log(transporter.options.host);

    const info = await transporter.sendMail(details, (err)=>{
        if(err){
                console.log('Error', err);    
                }else{
                console.log('Email sent');    

      }
    });

//   console.log("Message sent: %s", info);
  res.json();
  
}

module.exports = sendMail;