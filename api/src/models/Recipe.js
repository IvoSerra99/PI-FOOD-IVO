const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen:{
      type: DataTypes.TEXT,
       allowNull: true
     },
     health:{
      type: DataTypes.INTEGER,
      allowNull: false,
     },
     pasos:{
      type: DataTypes.TEXT,
      allowNull: true

     }
  }, { timestamps: false });
};
