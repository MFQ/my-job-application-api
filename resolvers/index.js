const { CountryQueryResolver } = require('./countryResolvers');
const { CompanyQueryResolver } = require('./companyResolvers');
const { CoverLetterQueryResolver, CoverLetterMutationResolver } = require('./coverLetterResolver');
const {
  JobApplicationQueryResolver,
  JobApplicationMutationResolver,
} = require('./jobApplicationResolver');
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
    ...JobApplicationQueryResolver,
  },

  Mutation: {
    ...CoverLetterMutationResolver,
    ...JobApplicationMutationResolver,
  },
};

module.exports = resolver;
