const { generateToken, verifyToken } = require('../utils/jwtHelper');
const User = require('../models/user.models');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.signUp = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || email || password) {
    next(new AppError('Please provide name or email or password', 401));
  }
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return next(new AppError('email for user already exists', 401));

  const newUser = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({
    status: 'success',
    message: 'user created Successfyully !!!',
    data: {
      user: newUser,
    },
  });
});
