'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  User.associate = function(models) {
    User.hasMany(models.Task,
       {foreignKey: 'taskId'})
  };
  return User;

};
