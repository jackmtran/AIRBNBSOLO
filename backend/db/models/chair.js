'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chair = sequelize.define('Chair', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  Chair.associate = function(models) {
    // associations can be defined here
  };
  return Chair;
};