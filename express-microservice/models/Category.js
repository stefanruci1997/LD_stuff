const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

const Category=  sequelize.define("Category",{
    category_id: {
        type:DataTypes.INTEGER  ,
        primaryKey : true ,
        field: "id",
        autoIncrement :true
      },
     category_name:{ 
         type : DataTypes.STRING    
       } ,
       deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      } 
}
, {
  tableName: 'categories',
  timestamps: false // If you want Sequelize to manage createdAt and updatedAt fields
});
module.exports= Category;