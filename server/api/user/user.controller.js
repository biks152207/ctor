'use strict';

import User from './user.model';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';
import { generateToken } from '../../utilities/utility';
import {sendMail} from '../../utilities/mailer';
import _ from 'lodash';

const resetTemplate = {
  subject: 'Password Reset',
  text: 'You have subscribed newsletters'
}

function validationError(res, statusCode) {
  console.log('from error');
  statusCode = statusCode || 422;
  return function(err) {
    return res.status(statusCode).json(err);
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    return res.status(statusCode).send(err);
  };
}

/**
 * Get list of users
 * restriction: 'admin'
 */
export function index(req, res) {
  return User.find({}, '-salt -password').exec()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(handleError(res));
}

/**
 * Creates a new user
 */
export function create(req, res) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.save()
    .then(function(user) {
      var token = jwt.sign({ _id: user._id }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      res.json({ token });
    })
    .catch(validationError(res));
}

/**
 * Get a single user
 */
export function show(req, res, next) {
  var userId = req.params.id;

  return User.findById(userId).exec()
    .then(user => {
      if(!user) {
        return res.status(404).end();
      }
      res.json(user.profile);
    })
    .catch(err => next(err));
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
export function destroy(req, res) {
  return User.findByIdAndRemove(req.params.id).exec()
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
}

/**
 * Change a users password
 */
export function changePassword(req, res) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  return User.findById(userId).exec()
    .then(user => {
      if(user.authenticate(oldPass)) {
        user.password = newPass;
        return user.save()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
}

export function forget(req, res){
  var email = req.body.email;
  if (email){
    return User.findOne({email: email}).select('-password').exec()
      .then(user =>{
        if(!user) {
          return res.status(404).json({message: 'We dont find the user with this email, Please try again with new email.'});
        }
        generateToken().then((token) => {
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000;
          user.save()
            .then(() => {
              resetTemplate.text =  `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                    Please click on the following link, or paste this into your browser to complete the process:\n\n
                    http://${req.headers.host}/reset/${token}\n\n
                    If you did not request this, please ignore this email and your password will remain unchanged.\n`;
              sendMail(_.merge(resetTemplate, {email: email}))
                .then(
                  (result) =>{
                    res.json({message:'We have sent you an email, Please check your email for registration.'})
                  }
                )
            })
            .catch((err) => {
              console.log(err);
            })
        })
      })
  }else{
    return res.status(403).json({message: 'Enter your email address'})
  }
}

/**
 * Get my info
 */
export function me(req, res, next) {
  var userId = req.user._id;

  return User.findOne({ _id: userId }, '-salt -password').exec()
    .then(user => { // don't ever give out the password or salt
      console.log(user);
      if(!user) {
        return res.status(401).end();
      }
      res.json(user);
    })
    .catch(err => next(err));
}

export function checkToken(req, res, next){
  if (req.params.token){
    return User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() }}).exec()
      .then(user =>{
        if (!user){
          return res.status(404).json({message: 'Password reset token is invalid or has expired'});
        }else{
          return res.json({message: 'success'});
        }
      })
  }else{
    return res.state(404).end();
  }
}

export function changepassword(req, res, next){
  console.log(req.body);
  if (req.body.token && req.body.password){
    return User.findOne({resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: Date.now() }}).exec()
      .then(user =>{
        if (!user){
          return res.status(404).json({message: 'Password reset token is invalid or has expired'});
        }else{
          console.log(user);
          user.password = req.body.password;
          user.resetPasswordToken = ' ';
          return user.save()
            .then(() => {
              res.status(200).json({message: 'Password successfully changed, Please login'});
            })
            // .catch(validationError(res));
        }
      })
  }else{
    return res.status(404).json({message: 'Missing arguments'})
  }
}


/**
 * Authentication callback
 */
export function authCallback(req, res) {
  res.redirect('/');
}
