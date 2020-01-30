/* eslint-disable no-unused-vars */
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    nid: DataTypes.INTEGER,
    status: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    profile: DataTypes.STRING,
  }, {})
  // eslint-disable-next-line func-names
  user.associate = function (models) {

    // associations can be defined here

  }
  return user
}
