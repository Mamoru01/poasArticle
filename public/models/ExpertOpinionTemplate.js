const Sequelize= require('sequelize');
const sequelize = require('./db');

ExpertOpinionTemplate = sequelize.define('Expert_Opinion_Template', {
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
    }

}, {
    sequelize,
    modelName: 'Expert_Opinion_Template'
});

module.exports = ExpertOpinionTemplate;
