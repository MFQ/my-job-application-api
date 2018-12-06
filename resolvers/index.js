const { CountryQueryResolver } = require('./countryResolvers');
const { CompanyQueryResolver } = require('./companyResolvers');
const { CoverLetterResolver } = require('./coverLetterResolver');

const resolver = {
  Query: {
    hello(root) {
      return 'world';
    },
    ...CompanyQueryResolver,
    ...CountryQueryResolver,
    ...CoverLetterResolver,
  },
};

module.exports = resolver;
