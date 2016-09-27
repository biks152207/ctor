/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/category              ->  index
 * POST    /api/category              ->  create
 * GET     /api/category/:id          ->  show
 * PUT     /api/category/:id          ->  upsert
 * PATCH   /api/category/:id          ->  patch
 * DELETE  /api/category/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Category from './category.model';

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

// Gets a list of Categorys
export function index(req, res) {
  return Category.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Category from the DB
export function show(req, res) {
  return Category.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Category in the DB
export function create(req, res) {
  return Category.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Category in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Category.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Category in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Category.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Category from the DB
export function destroy(req, res) {
  return Category.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
