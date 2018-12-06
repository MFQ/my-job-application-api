const { CountryQueryResolver } = require('./countryResolvers');
const { CompanyQueryResolver } = require('./companyResolvers');
const { CoverLetterResolver } = require('./coverLetterResolver');
const { userResolver } = require('./userResolver');

const resolver = {
  Query: {
    hello(root) {
      return 'world';
    },
    ...userResolver,
    ...CompanyQueryResolver,
    ...CountryQueryResolver,
    ...CoverLetterResolver,
  },
};

module.exports = resolver;
