const { Company } = require('../models');

const CompanyQueryResolver = {
  companies(obj, args) {
    const { name } = args;
    let whereClause = {};
    if (name !== '') {
      whereClause = {
        where: { name },
      };
    }

    return Company.findAll(whereClause).then(companies => companies);
  },
};

module.exports = { CompanyQueryResolver };
