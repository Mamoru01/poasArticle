const {Sequelize, Op }= require('sequelize');
const sequelize = require('./db');

Paper = sequelize.define('paper', {

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    source: {
        type: Sequelize.STRING,
        allowNull: false
    },
    authors: {
        type: Sequelize.STRING,
        allowNull: false
    },
    link: {
        type: Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expert_opinion: {
        type: Sequelize.STRING,
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
    modelName: 'paper',
    timestamps: false
});

module.exports = Paper;


