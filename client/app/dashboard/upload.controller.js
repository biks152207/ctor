'use strict';

export default class UploadController {
  /*@ngInject*/
  constructor(uploaderService, ThumbnailService, $http, Notification, $timeout) {
    'ngInject';
    this.upload = upload;
    this.fileDescriptions = [];
    this.timeout = $timeout;
    this.getCategories = getCategories.bind(this);
    this.getCategories();

    function getCategories(){
      $http.get('/api/category')
        .then(
          (result) =>{
            this.categories = result.data;
          }
        )
    }
    function upload(form, files){
      if (form.$valid){
        this.submitted = true;
        uploaderService.upload(files, this.fileDescriptions)
          .then((res) =>{
            form.$setPristine(true);
            this.files = null;
            this.fileDescriptions = [];
            Notification({message: 'Successfully uploaded'}, 'success');
          },
            (err) =>{

            },
            (evt) =>{
              var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
              this.progress = progressPercentage + '% '; // capture upload progress
            }
          )
          .finally(() =>{
            this.timeout(
              () =>{
                this.submitted = false;
              }, 4000);
          })     
      }
    }
  }
  
}
