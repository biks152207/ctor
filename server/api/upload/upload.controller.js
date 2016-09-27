/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/uploads              ->  index
 * POST    /api/uploads              ->  create
 * GET     /api/uploads/:id          ->  show
 * PUT     /api/uploads/:id          ->  upsert
 * PATCH   /api/uploads/:id          ->  patch
 * DELETE  /api/uploads/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Upload from './upload.model';
import Uploader from '../../utilities/file';
import multer from 'multer';
import Q from 'q';
var upload = multer({ dest: './server/uploads/'}).array('photoes',4)

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Uploads
export function index(req, res) {
  return Upload.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Upload from the DB
export function show(req, res) {
  return Upload.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Upload in the DB
export function create(req, res) {
   upload(req, res, function(err) {
      if(err) {
        console.log(err);
        console.log('Error Occured');
        return;
      }
      var bucket = [];
      for(var i in req.files){
        req.files[i].category = typeof req.body.fileDetails.category === 'object' ? req.body.fileDetails.category[i] :req.body.fileDetails.category;
        if (req.files[i].description){
          req.files[i].description = typeof req.body.fileDetails.description === 'object' ? req.body.fileDetails.description[i] :req.body.fileDetails.description;
        }
        var newfiles = new Upload(req.files[i]);
        bucket.push(Q.nfcall(newfiles.save.bind(newfiles)));
      }
      return Q.all(bucket)
        .then(
          (result) =>{
            res.json({message: 'Succesfully uploaded'})
          }
        )
        .catch(handleError(res));
      // res.end('Your Files Uploaded');
      // console.log('Photo Uploaded');
    })
}

// Upserts the given Upload in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Upload.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Upload in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Upload.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Upload from the DB
export function destroy(req, res) {
  return Upload.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
