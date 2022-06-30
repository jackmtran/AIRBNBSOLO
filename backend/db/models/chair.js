'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chair = sequelize.define('Chair', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Chair.associate = function(models) {
    Chair.belongsTo(models.User, {foreignKey: 'userId'})
    Chair.hasMany(models.Review, {foreignKey: 'chairId'})
  };
  return Chair;
};
