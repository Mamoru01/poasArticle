const Sequelize = require('sequelize');
const sequelize = require('./db');

module.exports = AuthorsArticle = sequelize.define('Articles_has_Authors', {
    firstAuthor: Sequelize.BOOLEAN
}, { timestamps: false });
