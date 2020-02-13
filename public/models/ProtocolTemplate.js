const Sequelize= require('sequelize');
const sequelize = require('./db');

ProtocolTemplate = sequelize.define('Protocol_Template', {
    filePath: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numberProtocolBegin:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    numberProtocolEnd:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    year:{
        type: Sequelize.INTEGER,
        allowNull: true
    }

}, {
    sequelize,
    modelName: 'Protocol_Template'
});

module.exports = ProtocolTemplate;
