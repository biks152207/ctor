import nodemailer from 'nodemailer';
import Q from 'q';
import config from '../config/environment';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.mailer.user, // Your email id
        pass: config.mailer.password // Your password
    }
});

export function sendMail(mailerObject){

  var mailOptions = {
      from: config.mailer.user, // sender address
      to: mailerObject.email, // list of receivers
      subject: mailerObject.subject,
      text: mailerObject.text
      
  };
  return Q.promise((resolve, reject) =>{

    transporter.sendMail(mailOptions, function(error, info){
    if(error){
          reject();
      }else{
          resolve({message: 'Successful'});
      };
    });
  })
  
}
