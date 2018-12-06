const { CoverLetter } = require('../models');
const { getUserId } = require('../utils/auth');

const CoverLetterResolver = {
  coverletters(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);
    return [
      {
        kind: 'asdaas',
        content: 'askjndakdadsnajksdnad',
        userId: 1,
      },
    ];
  },
};

module.exports = { CoverLetterResolver };
