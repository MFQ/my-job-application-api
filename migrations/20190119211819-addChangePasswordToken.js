module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('Users', 'changePasswordToken', {
    type: Sequelize.STRING,
    unique: true,
  }),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Users', 'changePasswordToken'),
};
