const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign(id, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

module.exports = {
  generateToken,
  verifyToken,
};
