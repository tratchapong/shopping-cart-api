module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',{
      total: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    },
    {
      underscored: true
    }
  );

  Cart.associate = models => {
    Cart.belongsTo(models.User);
    Cart.hasMany(models.CartItem)
  }

  return Cart
}
