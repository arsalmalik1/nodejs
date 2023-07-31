const nodemailer = require("nodemailer");

var gmailConfig = {
    service: 'gmail',
    // port: 465,
    secure: true, // use SSL
     secure: true, // true for 465, false for other ports
    logger: true,
    debug: true,
    auth: {
        user: 'ws338558@gmail.com',
        pass: 'iscyjqliemhsgesh'
    }
};
  
var smtpConfig = {
    host: 'premium289.web-hosting.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
    user: 'info@savordelivery.com',
    pass: '4]!h&0lzmUGt'
    },
};
  
const transporter =  nodemailer.createTransport(gmailConfig);

transporter
    .verify()
    .then(() =>  console.log('Connected to email server'))
    .catch(() => console.log('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));

const sendBasicEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: "info@savordelivery.com", // Replace with your email address
      to: "arsalfree3@gmail.com", // Replace with recipient's email address
      subject: "Test Email from Nodemailer and Namecheap",
      text: "This is a test email sent using Nodemailer with Namecheap SMTP!",
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

sendBasicEmail();
//   console.log("Message sent: %s", info);
  


const etherealSMTP = {
    host: 'smtp.ethereal.email',
    port: 587,
    logger: true,
    debug: true,
    auth: {
        user: 'nathanial21@ethereal.email',
        pass: 'ng1481nf5yX4Ad5c4t'
    }
};

