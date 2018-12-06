const { omitBy } = require('lodash');

const { JobApplication } = require('../models');
const { getUserId } = require('../utils/auth');

const JobApplicationQueryResolver = {
  jobApplications(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);
    const whereClause = omitBy(args, val => val === '');

    return JobApplication.findAll({ where: { userId, ...whereClause } }).then(
      jobApplications => jobApplications,
    );
  },
};

const JobApplicationMutationResolver = {
  createCoverLetter(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);

    return JobApplication.create({ userId, ...args }).then(coverletter => coverletter);
  },

  updateCoverLetter(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);
    const payload = omitBy(args, (val, key) => val === '' || key === 'id');
    const { id } = args;
    return JobApplication.update(payload, { where: { id, userId } }).then(
      results => `Number of updated letters ${results}`,
    );
  },

  deleteJobApplication(obj, args, context) {
    const { req: { headers: { authorization } } } = context;
    const { userId } = getUserId(authorization);
    const { id } = args;
    return JobApplication.destroy({ where: { id, userId } }).then(
      results => `Number removed letters ${results}`,
    );
  },
};

module.exports = { JobApplicationQueryResolver, JobApplicationMutationResolver };
