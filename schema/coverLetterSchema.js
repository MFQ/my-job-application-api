const coverLetterSchema = `
  type CoverLetter {
    id: Int
    kind: String
    content: String
    userId: Int
  }
`;

const coverLetterMutations = `
  createCoverLetter(kind: String, content: String ): CoverLetter

  deleteCoverLetter(id: Int): String

  updateCoverLetter(id: Int, kind: String, content: String): String
`;

const coverLetterQuerySchema = `
  coverletters( id: Int ): [CoverLetter]
`;

module.exports = {
  coverLetterSchema,
  coverLetterQuerySchema,
  coverLetterMutations,
};
