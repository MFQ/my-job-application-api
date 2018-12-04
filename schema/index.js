const { gql } = require('apollo-server-express');
// const { userSchema } = require('./userSchema');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = typeDefs;
