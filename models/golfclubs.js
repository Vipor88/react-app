'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class golfclubs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  golfclubs.init({
    modelPic: DataTypes.STRING,
    stripeId: DataTypes.STRING,
    modelName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    productHighlights: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'golfclubs',
  });
  return golfclubs;
};