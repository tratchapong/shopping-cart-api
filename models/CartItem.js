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
    CartItem.belongsTo(models.Product);
    CartItem.belongsTo(models.Cart)
  }

  return CartItem
}