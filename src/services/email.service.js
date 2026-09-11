require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});



// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Backend Project" <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


async function sendRegistrationEmail(userEmail,name){
    const subject = "Welcome to Backend Project";
    const text = `Hello ${name}, Welcome to Backend Project. Thank you for registering.`;
    const html = `<p>Hello ${name}, Welcome to Backend Project. Thank you for registering.</p>`;
    
    await sendEmail(userEmail,subject,text,html);

}

async function sendTransactionEmail(userEmail,name,amount,toAccount){
    const subject = "Transaction Completed";
    const text = `Hello ${name}, Transaction of ${amount} has been completed to account ${toAccount}`;
    const html = `<p>Hello ${name}, Transaction of ${amount} has been completed to account ${toAccount}</p>`;

    await sendEmail(userEmail,subject,text,html);
}

async function sendTransactionFailureEmail(userEmail,name,amount,toAccount){
    const subject = "Transaction Failed";
    const text = `Hello ${name}, Transaction of ${amount} failed to account ${toAccount}`;
    const html = `<p>Hello ${name}, Transaction of ${amount} failed to account ${toAccount}</p>`;

    await sendEmail(userEmail,subject,text,html);
}

module.exports = {
    sendRegistrationEmail,
    sendTransactionEmail,
    sendTransactionFailureEmail
};