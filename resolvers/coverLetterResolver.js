const { CoverLetter } = require('../models');
const { getUserId } = require('../utils/auth');

const CoverLetterResolver = {
  coverletters(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);

    return CoverLetter.findAll({ where: { userId } }).then(coverletters => coverletters);
  },
};

module.exports = { CoverLetterResolver };
