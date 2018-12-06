const { gql } = require('apollo-server-express');
// const { userSchema } = require('./userSchema');
const { countrySchema, countryQuerySchema } = require('./countrySchema');
const { companySchema, companyQuerySchema } = require('./companySchema');

const typeDefs = gql`
  ${countrySchema}
  ${companySchema}

  type Query {
    hello: String
    ${countryQuerySchema}
    ${companyQuerySchema}
  }
`;

module.exports = typeDefs;
