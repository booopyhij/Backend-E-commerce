const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
//Class the contains the will allow the DB to create and house different categories
class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    category_name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
