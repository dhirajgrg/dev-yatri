const { verifyToken } = require('../utils/jwtHelper');
const User = require('../models/user.models');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const protect = catchAsync(async (req, res, next) => {
  let { token } = req.cookies;

  if (!token) {
    next(new AppError('you are not logged in. please login again', 401));
  }

  const decoded = verifyToken(token);
  const currentUser = await User.findById(decoded.id);

  if (!currentUser)
    return next(
      new AppError('The user belong to this token no longer exists', 401),
    );

  req.user = currentUser;

  next();
});

module.exports = protect;
