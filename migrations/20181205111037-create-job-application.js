module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('JobApplications', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    company: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    jobDescription: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.STRING,
    },
    appliedDate: {
      type: Sequelize.DATE,
    },
    coverLetter: {
      type: Sequelize.TEXT,
    },
    source: {
      type: Sequelize.STRING,
    },
    response: {
      type: Sequelize.TEXT,
    },
    timeTookToApply: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    notes: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('JobApplications'),
};
