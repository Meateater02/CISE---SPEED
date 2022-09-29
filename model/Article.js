const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true
  },
  author: {
    type: String,
    // required: true
  },
  journalName: {
    type: String,
    // required: true
  },
  year: {
    type: Number,
    // required: true
  },
  volume: {
    type: Number
  },
  number: {
    type: Number
  },
  pages: {
    type: String
  },
  doi: {
    type: String,
    // required: true
  },
  SEmethod: {
    type: String,
    // required: true
  },
  claim: {
    type: String
  },
  evidence: {
    type: String
  },
  status: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);