module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
      }
    },
    {
      underscored: true
    }
  );

  Product.associate = models => {
    Product.belongsTo(models.CartItem, {
      foreignKey: {
        name: 'productId',
        allowNull: false
      },
    });
  }

  return Product
}