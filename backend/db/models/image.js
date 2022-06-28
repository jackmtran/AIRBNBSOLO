'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    chairId: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING

  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Chair, {foreignKey: 'chairId'})
  };
  return Image;
};
