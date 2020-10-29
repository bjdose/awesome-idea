const mongoose = require('mongoose');
const { Schema } = mongoose;

const {
  compareSync,
  hashSync,
  genSaltSync,
} = require('bcryptjs');

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.toJSON = () => {
  let user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePassword = () => {
  return compareSync(password, this.password);
};

UserSchema.pre('save', async () => {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;

  next();
});

module.exports = mongoose.model('user', UserSchema);
