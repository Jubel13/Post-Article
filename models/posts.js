"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init(
    {
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title is required",
          },
          notEmpty: {
            msg: "Title is required",
          },
          len: {
            args: [20],
            msg: " Minimum character for title is 20",
          },
        },
      },
      Content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Content is required",
          },
          notEmpty: {
            msg: "Content is required",
          },
          len: {
            args: [200],
            msg: " Minimum character for content is 200",
          },
        },
      },
      Category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Category is required",
          },
          notEmpty: {
            msg: "Category is required",
          },
          len: {
            args: [3],
            msg: " Minimum character for category is 3",
          },
        },
      },
      Status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Status is required",
          },
          notEmpty: {
            msg: "Status is required",
          },
          isIn: {
            args: [["Publish", "Draft", "Thrash"]],
            msg: "The value must be Publish, Draft, or Thrash",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
