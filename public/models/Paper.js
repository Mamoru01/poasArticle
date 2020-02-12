const Sequelize= require('sequelize');
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
        expert_opinion: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        expert_opinion_owner:{
            type: Sequelize.STRING,
            allowNull: true
        },
        state_expert_opinion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        comment: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        year:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'paper'
    });

module.exports = Paper;


