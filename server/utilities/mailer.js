import nodemailer from 'nodemailer';
import Q from 'q';
import config from '../config/environment';

const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
        user: config.mailer.user, // Your email id
        pass: config.mailer.password // Your password
    }
});

export function sendMail(mailerObject){

  var mailOptions = {
      from: config.mailer.adminEmail, // sender address
      to: mailerObject.email, // list of receivers
      subject: mailerObject.subject,
      text: mailerObject.text

  };
  console.log('mailer');
  console.log(mailOptions);
  return Q.promise((resolve, reject) =>{

    transporter.sendMail(mailOptions, function(error, info){
    if(error){
          console.log(error);
          console.log('from error onefsfsfsd');
          // reject();
      }else{
          console.log('from success');
          resolve({message: 'Successful'});
      };
    });
  })

}
