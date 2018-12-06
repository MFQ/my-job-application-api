const { gql } = require('apollo-server-express');
const { userSchema, meSchema } = require('./userSchema');
const { countrySchema, countryQuerySchema } = require('./countrySchema');
const { companySchema, companyQuerySchema } = require('./companySchema');
const { coverLetterSchema, coverLetterQuerySchema } = require('./coverLetterSchema');

const typeDefs = gql`
  ${countrySchema}
  ${companySchema}
  ${coverLetterSchema}
  ${userSchema}
  
  type Query {
    hello: String
    ${meSchema}
    ${countryQuerySchema}
    ${companyQuerySchema}
    ${coverLetterQuerySchema}
  }
`;

module.exports = typeDefs;
