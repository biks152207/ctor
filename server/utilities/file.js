import formidable from 'formidable';
import path from 'path';
import Q from 'q';
// Create incoming form object
const form = new formidable.IncomingForm();
// Allows multiple file to upload
form.multiples = true;

// Upload all the files in the /upload directory
form.uploadDir = path.join(__dirname, '/uploads');


export function Uploader(req){
  var deferred = Q.defer();

  // Every time a file has been uploaded successfully
  // Rename the file to it's original name
  form.on('file', function(field, file){
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  })

  // Logs any error while uploading
  form.on('error', function(error){
    console.log('An error occurred: \n' + error);
    deferred.reject();
  });

  // Once all the files have been uploaded, send the reponse to the client
  form.on('end', function(){
    deferred.resolve();
  });
  // Parse the incoming request containing the form data
  form.parse(req);

}