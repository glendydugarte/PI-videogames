const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => { //aqui le estoy pasando la instancia de sequelize o conexion a la funcion para que defina el modelo.
  // defino el modelo
  sequelize.define('videogame', { 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      UNIQUE: true,
      
    },

  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
    
  },
description:{ 
  type: DataTypes.STRING,
  allowNull: false,
},
platforms:{
  type: DataTypes.STRING,
  allowNull: false,
},

background_image:{
  type: DataTypes.STRING,
  allowNull: false,
},

rating:{ 
  type: DataTypes.STRING,
  allowNull: false,

},
released: {
   type: DataTypes.DATE,
  allowNull: false

},
created: {  
  type: DataTypes.BOOLEAN,
  allowNull: false
}


  }, { timestamps: false}
  );
};
