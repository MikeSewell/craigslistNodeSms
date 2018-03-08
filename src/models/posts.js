const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  pid: String,
  price: String,
  url: String,
  date: String,
});

module.exports = mongoose.model('Post', postSchema);

