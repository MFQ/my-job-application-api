const { gql } = require('apollo-server-express');
// const { userSchema } = require('./userSchema');
const { countrySchema, countryQuerySchema } = require('./countrySchema');

const typeDefs = gql`
  ${countrySchema}

  type Query {
    hello: String
    ${countryQuerySchema}
  }
`;

module.exports = typeDefs;
