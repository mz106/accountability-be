// Use sequelize db connection 
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");


const User =sequelize.define("User", 
  {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username : {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hash_pass: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    is_admin:{
      type: DataTypes.BOOLEAN, 
      defaultValue: false
    }
  },
  {timestamps:false}
); 



module.exports = User;