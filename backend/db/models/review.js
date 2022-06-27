'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    reviewLine: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    chairId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Chair, {foreignKey: 'chairId'})
    Review.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Review;
};
