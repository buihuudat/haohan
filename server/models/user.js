const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const getToken = require('../utils/getTokenForUser');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true },
  password: String,
  phone: String,
  avatar: { type: String, default: 'https://i.pinimg.com/originals/9d/05/86/9d0586ac63b7e7a30a6ffafcbb4e0a93.gif' },
  primary: { type: String, default: '2' },
  access_token: String,
}, { timestamps: true });

userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      user.access_token = getToken(user);
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if (err) return reject(err);

      resolve(isMatch);
    });
  });
};

module.exports = mongoose.model('user', userSchema);

