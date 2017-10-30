export default (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true,
    }
  })

  User.associate =(models)=> {};

  return User;
};

