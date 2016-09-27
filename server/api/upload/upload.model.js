'use strict';

import mongoose from 'mongoose';
import { Schema } from 'mongoose';

var UploadSchema = new mongoose.Schema({
  originalname: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category'},
  path: String,
  description: String

});

export default mongoose.model('Upload', UploadSchema);
