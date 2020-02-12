const Sequelize= require('sequelize');
const sequelize = require('./db');

ExpertOpinionTemplate = sequelize.define('Expert_Opinion_Template', {
    filePath: {
        type: Sequelize.STRING,
        allowNull: false
    },
    NumberProtocol:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    year:{
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Expert_Opinion_Template'
});

module.exports = ExpertOpinionTemplate;
