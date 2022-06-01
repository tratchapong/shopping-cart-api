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
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        }
      }
    },
    {
      underscored: true
    }
  );

  User.associate = models => {
    User.hasOne(models.Cart);
  }
  
  return User
}