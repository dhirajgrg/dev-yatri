const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'must provide a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'must provide email'],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'must provide password'],
      default: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function () {
  if (!this.modified(password)) return;
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model('User', userSchema);
