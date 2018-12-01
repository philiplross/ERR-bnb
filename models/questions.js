module.exports = function(sequelize, DataTypes) {
  var questions = sequelize.define("questions", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return questions;
};
