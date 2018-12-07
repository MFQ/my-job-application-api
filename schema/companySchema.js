const companySchema = `
  type Company {
    id: Int
    name: String
  }
`;

const companyQuerySchema = `
  companies(name: String): [Company]
`;

module.exports = { companySchema, companyQuerySchema };
