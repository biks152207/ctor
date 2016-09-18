'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/sc-dev'
  },
  mailer:{
    user: 'bsntbiks12@gmail.com',
    password: 'beatles12'
  },

  // Seed database on startup
  seedDB: true

};
