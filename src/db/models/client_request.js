'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client_Request = sequelize.define('Client_Request', {
    client_id: DataTypes.INTEGER,
    domestic_worker_id: DataTypes.INTEGER
  }, {});
  Client_Request.associate = function(models) {
    // associations can be defined here
  };
  return Client_Request;
};