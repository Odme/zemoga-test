const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/zemoga_test', { useCreateIndex: true });

module.exports = { mongoose };
