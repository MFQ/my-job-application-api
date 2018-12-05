const countrySchema = `
  type Country {
    id: Int
    name: String
  }
`;

const countryQuerySchema = `
  countries(name: String): [Country]
`;

module.exports = { countrySchema, countryQuerySchema };
