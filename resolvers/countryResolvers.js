const { Country } = require('../models');

const CountryQueryResolver = {
  countries(obj, args) {
    let whereClause = {};
    const { name } = args;
    if (name !== '') {
      whereClause = {
        where: { name },
      };
    }
    return Country.findAll(whereClause).then(countries => countries);
  },
};

module.exports = { CountryQueryResolver };
