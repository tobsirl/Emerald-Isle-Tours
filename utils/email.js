const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1. Create a transport
  const transport = nodemailer.createTransport({
    service: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      password: process.env.EMAIL_PASSWORD
    }
  });

  // 2. Define the email options
  const mailOptions = {
    from: 'Paul Tobin <paul@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  // 3. Actually send the email
  await transport.sendMail(mailOptions);
};

module.exports = sendEmail;
