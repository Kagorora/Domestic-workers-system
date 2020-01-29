'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client_Requests = sequelize.define('Client_Requests', {
    client_id: DataTypes.INTEGER,
    domestic_worker_id: DataTypes.INTEGER
  }, {});
  Client_Requests.associate = function(models) {
    // associations can be defined here
  };
  return Client_Requests;
};