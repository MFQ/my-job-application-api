const { gql } = require('apollo-server-express');
const { userSchema, meSchema } = require('./userSchema');
const { countrySchema, countryQuerySchema } = require('./countrySchema');
const { companySchema, companyQuerySchema } = require('./companySchema');
const {
  coverLetterSchema,
  coverLetterQuerySchema,
  coverLetterMutations,
} = require('./coverLetterSchema');

const {
  jobApplicationSchema,
  jobApplicationsMutations,
  jobApplicationQuerySchema,
} = require('./jobApplicationSchema');

const typeDefs = gql`
  ${countrySchema}
  ${companySchema}
  ${coverLetterSchema}
  ${userSchema}
  ${jobApplicationSchema}

  type Query {
    hello: String
    ${meSchema}
    ${countryQuerySchema}
    ${companyQuerySchema}
    ${coverLetterQuerySchema}
    ${jobApplicationQuerySchema}
  }

  type Mutation {
    ${coverLetterMutations}
    ${jobApplicationsMutations}
  }
`;

module.exports = typeDefs;
