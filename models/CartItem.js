module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define(
    'CartItem',{
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      underscored: true
    }
  );

  CartItem.associate = models => {
    CartItem.hasOne(models.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false
      },
    });

    CartItem.belongsTo(models.Cart, {
      foreignKey: {
        name: 'cartId'
      }
    })
  }

  return CartItem
}