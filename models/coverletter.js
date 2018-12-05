module.exports = (sequelize, DataTypes) => {
  const CoverLetter = sequelize.define(
    'CoverLetter',
    {
      kind: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {},
  );
  CoverLetter.associate = function (models) {
    // associations can be defined here
  };
  return CoverLetter;
};
