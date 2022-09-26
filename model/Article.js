const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  journalName: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  volume: {
    type: Number
  },
  number: {
    type: Number
  },
  pages: {
    type: Number
  },
  doi: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  claim: {
    type: String
  },
  evidence: {
    type: String
  },
  status: {
    type: String
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);