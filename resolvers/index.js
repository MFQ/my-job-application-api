const { CountryQueryResolver } = require('./countryResolvers');

console.log(CountryQueryResolver);

const resolver = {
  Query: {
    hello(root) {
      return 'world';
    },
    ...CountryQueryResolver,
  },
};

module.exports = resolver;
