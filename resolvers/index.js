const { CountryQueryResolver } = require('./countryResolvers');
const { CompanyQueryResolver } = require('./companyResolvers');
const { CoverLetterQueryResolver, CoverLetterMutationResolver } = require('./coverLetterResolver');
const { userResolver } = require('./userResolver');

const resolver = {
  Query: {
    hello(root) {
      return 'world';
    },
    ...userResolver,
    ...CompanyQueryResolver,
    ...CountryQueryResolver,
    ...CoverLetterQueryResolver,
  },

  Mutation: {
    ...CoverLetterMutationResolver,
  },
};

module.exports = resolver;
