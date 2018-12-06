const { gql } = require('apollo-server-express');
// const { userSchema } = require('./userSchema');
const { countrySchema, countryQuerySchema } = require('./countrySchema');
const { companySchema, companyQuerySchema } = require('./companySchema');
const { coverLetterSchema, coverLetterQuerySchema } = require('./coverLetterSchema');

const typeDefs = gql`
  ${countrySchema}
  ${companySchema}
  ${coverLetterSchema}

  type Query {
    hello: String
    ${countryQuerySchema}
    ${companyQuerySchema}
    ${coverLetterQuerySchema}
  }
`;

module.exports = typeDefs;
