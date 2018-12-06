const { CoverLetter } = require('../models');
const { getUserId } = require('../utils/auth');

const CoverLetterQueryResolver = {
  coverletters(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);

    return CoverLetter.findAll({ where: { userId } }).then(coverletters => coverletters);
  },
};

const CoverLetterMutationResolver = {
  createCoverLetter(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);
    const { kind, content } = args;

    return CoverLetter.create({ userId, kind, content }).then(coverletter => coverletter);
  },
};

module.exports = { CoverLetterQueryResolver, CoverLetterMutationResolver };
