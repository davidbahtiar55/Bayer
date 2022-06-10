const sendAnEmail = (message) => {

    const nodemailer = require('nodemailer');
    const sgTransport = require('nodemailer-sendgrid-transport');
    const options = {
        service: 'gmail',
        auth: {
          user: 'qaeinsignia@gmail.com',
          pass: 'yzyymdzvnnouavhx'
        }
    }
    const client = nodemailer.createTransport(sgTransport(options));
  
    const email = {
      from:  configMail.auth.user,
      to:  configMail.auth.user,
      subject: 'Hello',
      text: message,
      html: '<b>Hello world</b>'
    };
    client.sendMail(email, function(err, info) {
      return err? err.message : 'Message sent: ' + info.response;
    });
  }
  
