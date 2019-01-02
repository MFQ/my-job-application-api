module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('CoverLetters', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    kind: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    userId: {
      type: Sequelize.INTEGER,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('CoverLetters'),
};
