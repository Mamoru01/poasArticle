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
        export_opinion: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        owner:{
            type: Sequelize.STRING,
            allowNull: true
        },
        state_export_opinion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        state_expert_opinion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        comment: {
            type: Sequelize.TEXT,
            allowNull: true
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


