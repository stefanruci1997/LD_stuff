// models/article.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Article = sequelize.define('Article', {
  article_id: {
    type: DataTypes.INTEGER,
    field: 'id',
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  sub_title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // You can set allowNull to false if category_id is required
    references: {
      model: 'categories',
      key: 'category_id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // Assuming user_id is required
    references: {
      model: 'users',
      key: 'user_id'
    }
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
  tableName: 'articles',
  timestamps: false // If you want Sequelize to manage createdAt and updatedAt fields
});


module.exports = Article;
