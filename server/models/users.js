import Sequelize from 'sequelize';
import db from '../config/database';
const users=db.define('Users',{
firstName:{
    type:Sequelize.INTEGER
},
lastName:{
    type:Sequelize.INTEGER
},
email:{
    type:Sequelize.INTEGER
},
password:{
    type:Sequelize.INTEGER
},

phoneNumber:{
    type:Sequelize.INTEGER
},
nid:{
    type:Sequelize.INTEGER
},
status:{
    type:Sequelize.INTEGER
},
type:{
    type:Sequelize.INTEGER
},
description:{
    type:Sequelize.INTEGER
},
profilePhoto:{
    type:Sequelize.INTEGER
},
})

export default users;