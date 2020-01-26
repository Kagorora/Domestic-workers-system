import Sequelize from 'sequelize';
import db from '../config/database';
const clientRequest=db.define('Clients_Requests',{
Client_ID:{
    type:Sequelize.INTEGER
},
DomesticWorker_ID:{
    type:Sequelize.INTEGER
},
})

export default clientRequest;