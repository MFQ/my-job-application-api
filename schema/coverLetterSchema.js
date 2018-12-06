const coverLetterSchema = `
  type CoverLetter {
    id: Int
    kind: String
    content: String
    userId: Int
  }
`;

const createCoverLetterMutations = `
  createCoverLetter(kind: String, content: String ): CoverLetter
`;

const coverLetterQuerySchema = `
  coverletters: [CoverLetter]
`;

module.exports = {
  coverLetterSchema,
  coverLetterQuerySchema,
  createCoverLetterMutations,
};
