const { gql } = require('apollo-server-express');
const { userSchema, meSchema } = require('./userSchema');
const { countrySchema, countryQuerySchema } = require('./countrySchema');
const { companySchema, companyQuerySchema } = require('./companySchema');
const {
  coverLetterSchema,
  coverLetterQuerySchema,
  createCoverLetterMutations,
} = require('./coverLetterSchema');

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

  type Mutation {
    ${createCoverLetterMutations}
  }
`;

module.exports = typeDefs;
