module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      underscored: true
    }
  );

  User.associate = models => {
    User.hasOne(models.Cart, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
    });
  }
  
  return User

}