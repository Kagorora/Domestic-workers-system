import { DataTypes } from 'sequelize';
import db from '../config/dbConnection';

const user = db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
       autoIncrement:true,
       allowNull:false,
      },
    firstName:DataTypes.STRING,
    lastName:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    phoneNumber:DataTypes.INTEGER,
    nid:DataTypes.INTEGER,
    status: DataTypes.STRING,
    type:DataTypes.STRING,
    description:DataTypes.STRING,
    profile:DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
    
})

export default user;