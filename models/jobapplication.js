
module.exports = (sequelize, DataTypes) => {
  const JobApplication = sequelize.define(
    'JobApplication',
    {
      company: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      jobDescription: DataTypes.STRING,
      status: DataTypes.STRING,
      appliedDate: DataTypes.DATE,
      coverLetter: DataTypes.STRING,
      source: DataTypes.STRING,
      response: DataTypes.STRING,
      timeTookToApply: DataTypes.DATE,
      country: DataTypes.STRING,
      notes: DataTypes.STRING,
    },
    {},
  );
  JobApplication.associate = function (models) {
    // associations can be defined here
  };
  return JobApplication;
};
