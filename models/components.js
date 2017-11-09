
module.exports = function(sequelize, DataTypes) {

  var Components = sequelize.define("Components", {

    item_name: {
      type: DataTypes.STRING,
      allowNull: true
      },

    item_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
    item_img: {
      type: DataTypes.STRING,
      allowNull: true
    },

    item_tier: {
      type: DataTypes.STRING,
      allowNull: true
    },

    item_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },

    item_stock: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  },
  {
    timestamp: false
  

  });
  

  
  var Seller = sequelize.define("Seller", {

    item_name: {
      type: DataTypes.STRING,
      allowNull: true
      },

    item_type: {
      type: DataTypes.STRING,
      allowNull: true
    },

    item_price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  },
  {
    timestamp: false
  
  });
  return Components;
  return Seller;
};


