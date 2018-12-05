module.exports = function(connection, Sequelize) {
  var questions = connection.define("questions", {
    text: Sequelize.STRING,
    description: Sequelize.TEXT
  })
  return questions
}
