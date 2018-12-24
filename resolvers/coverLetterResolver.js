const { CoverLetter } = require('../models');
const { getUserId } = require('../utils/auth');
const { omitBy } = require('lodash');

const CoverLetterQueryResolver = {
  coverletters(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);
    const whereClause = omitBy(args, val => val === '');

    return CoverLetter.findAll({ where: { userId, ...whereClause } }).then(
      coverletters => coverletters,
    );
  },
};

const CoverLetterMutationResolver = {
  createCoverLetter(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);
    const { kind, content } = args;

    return CoverLetter.create({ userId, kind, content }).then(coverletter => coverletter);
  },

  updateCoverLetter(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);

    const payload = {};
    const { kind, content, id } = args;
    if (kind !== '') {
      payload.kind = kind;
    }

    if (content !== '') {
      payload.content = content;
    }

    return CoverLetter.update(payload, { where: { id, userId } }).then(
      results => `Number of updated letters ${results}`,
    );
  },

  deleteCoverLetter(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);

    const { id } = args;

    return CoverLetter.destroy({ where: { id, userId } }).then(
      results => `Number removed letters ${results}`,
    );
  },
};

module.exports = { CoverLetterQueryResolver, CoverLetterMutationResolver };
