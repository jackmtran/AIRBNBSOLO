'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imgUrl: DataTypes.STRING,
    chairId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Chair, {foreignKey: 'chairId'})
  };
  return Image;
};
