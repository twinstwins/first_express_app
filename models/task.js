'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userID: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.User,
       {foreignKey: 'userId'})
  };
  return Task;

};
