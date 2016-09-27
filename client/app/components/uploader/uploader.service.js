'use strict';
const angular = require('angular');

/*@ngInject*/
export function uploaderService(Upload) {
  'ngInject';
	var service = {};
  service.upload = upload;

  function upload(files, fileDescriptions){
    return Upload.upload({
      url:'/api/uploads',
      method: 'POST',
      arrayKey: '',
      data:{
        photoes: files,
        fileDetails: fileDescriptions
      }
    });
  }
  return service;
}

export default angular.module('scApp.uploader', [])
  .service('uploaderService', uploaderService)
  .name;
