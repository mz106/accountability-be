// Use sequelize db connection 
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");


const User =sequelize.define("User", 
  {
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