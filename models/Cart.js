module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',{
      total: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      underscored: true
    }
  );

  Cart.associate = models => {
    Cart.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
    });
    Cart.hasMany(models.CartItem,{
      foreignKey: {
        name: 'cartId'
      }
    })
  }

  return Cart
}
