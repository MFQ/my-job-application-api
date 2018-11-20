const userSchema = `
  type User {
    id: Int!
    username: String!
    email: String!
  }
`;

const userMutation = `
  signup (username: String!, email: String!, password: String!): String
  login (email: String!, password: String!): String
`;

module.exports = { userSchema, userMutation };
