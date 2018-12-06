const userSchema = `
  type User {
    username: String
    email: String
    id: Int
  }
`;

const meSchema = `
  me: User
`;

module.exports = { userSchema, meSchema };
