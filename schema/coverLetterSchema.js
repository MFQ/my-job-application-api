const coverLetterSchema = `
  type CoverLetter {
    id: Int
    kind: String
    content: String
    userId: Int
  }
`;

const coverLetterQuerySchema = `
  coverletters: [CoverLetter]
`;

module.exports = { coverLetterSchema, coverLetterQuerySchema };
