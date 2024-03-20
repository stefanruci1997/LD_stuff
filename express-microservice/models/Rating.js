// models/articleRating.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ArticleRating = sequelize.define('ArticleRating', {
  rating_id: {
    type: DataTypes.INTEGER,
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  },
  article_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Article',
      key: 'article_id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'user_id'
    }
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  deleted_at: {
    type: DataTypes.DATE,
    defaultValue: null
  }
}, {
  tableName: 'article_ratings',
  timestamps: false // If you want Sequelize to manage createdAt and updatedAt fields
});

module.exports = ArticleRating;
