const { User } = require('../models');
const { getUserId } = require('../utils/auth');

const userResolver = {
  me(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);
    return User.findOne({ where: { id: userId } }).then(user => user);
  },
};

module.exports = { userResolver };
