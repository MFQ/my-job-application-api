const jobApplicationSchema = `

  type JobApplication {
    company: String
    userId: Int
    id: Int
    jobDescription: String
    status: String
    appliedDate: String
    coverLetter: String
    source: String
    response: String
    timeTookToApply: String
    country: String
    notes: String
  }
`;

const jobApplicationsMutations = `
  createJobApplications(company: String, soure: String, country: String, status: String, appliedDate: String, coverLetter: String, source: String, response: String, timeTookToApply: String, country: String, notes: String): [JobApplication]

  updateJobApplication(company: String, soure: String, country: String, status: String, appliedDate: String, coverLetter: String, source: String, response: String, timeTookToApply: String, country: String, notes: String ): String

  deleteJobApplication(id: Int): String
`;

const jobApplicationQuerySchema = `

  jobApplications( company: String, jobDescription: String, status:String, coverLetter:String, appliedDate: String): [JobApplication]

`;

module.exports = { jobApplicationSchema, jobApplicationQuerySchema, jobApplicationsMutations };
