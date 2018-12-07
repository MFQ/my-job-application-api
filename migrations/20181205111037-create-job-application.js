module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('JobApplications', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    conpany: {
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    jobDescription: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    appliedDate: {
      type: Sequelize.DATE,
    },
    coverLetter: {
      type: Sequelize.STRING,
    },
    source: {
      type: Sequelize.STRING,
    },
    response: {
      type: Sequelize.STRING,
    },
    timeTookToApply: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    notes: {
      type: Sequelize.STRING,
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
