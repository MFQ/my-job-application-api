const jwt = require('jsonwebtoken');

const getUserId = token => jwt.verify(token, process.env.JWT_SECERT, (err, data) => {
  if (err) {
    throw new Error('User is not authenticated ');
  }
  return data;
});

module.exports = { getUserId };
