const {Sequelize, Op }= require('sequelize');
const sequelize = require('./db');

Paper = sequelize.define('paper', {

    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    source: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    authors: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    link: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expert_opinion: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    state_expert_opinion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'paper'
});

module.exports = Paper;


