import crypto from 'crypto';
import Q from 'q';

export function generateToken(){
  return Q.promise((resolve, reject) => {
    crypto.randomBytes(20, function(err, buf) {
      var token = buf.toString('hex');
      resolve(token);
    });
  })

}
