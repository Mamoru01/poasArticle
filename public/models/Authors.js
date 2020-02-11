const Sequelize = require('sequelize');
const sequelize = require('./db');

Authors = sequelize.define('authors', {
    // attributes
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'authors',
    timestamps: false
});



module.exports = Authors;
