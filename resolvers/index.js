const { CountryQueryResolver } = require('./countryResolvers');
const { CompanyQueryResolver } = require('./companyResolvers');

const resolver = {
  Query: {
    hello(root) {
      return 'world';
    },
    ...CompanyQueryResolver,
    ...CountryQueryResolver,
  },
};

module.exports = resolver;
