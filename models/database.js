module.exports = function(sequelize, DataTypes) {
    var database = sequelize.define("database", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return database;
  };