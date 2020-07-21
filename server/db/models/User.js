const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = Schema({

  user: { type: String, unique: true },
  pwd: String,
  age: Number,
  marriage: String,
  votes: Object,

});

UserSchema.plugin(uniqueValidator);

const User = model('users', UserSchema);

module.exports = User;
