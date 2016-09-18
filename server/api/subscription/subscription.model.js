'use strict';

import mongoose from 'mongoose';

var SubscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});
SubscriptionSchema.path('email').validate(function (email) {
   var emailRegex = /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   return emailRegex.test(email); // Assuming email has a text attribute
}, 'The e-mail field cannot be empty.')

export default mongoose.model('Subscription', SubscriptionSchema);
