const { gql } = require('apollo-server-express');
const { userSchema, userMutation } = require('./UserSechma');

const typeDefs = gql`
  type Query {
    hello: String
    me: User
  }

  ${userSchema}

  type Mutation {
    ${userMutation}
  }
`;

module.exports = typeDefs;
