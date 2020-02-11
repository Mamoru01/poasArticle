const Sequelize = require('sequelize');
const sequelize = require('./db');
const AuthorsArticle = require('./AuthorsArticle');
const Authors = require('./Authors');

Article = sequelize.define('Articles', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    compilation: {
        type: Sequelize.STRING,
        allowNull: true
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'articles',
    timestamps: false
});

Article.belongsToMany(Authors,{
    through: AuthorsArticle,
    as: 'authors',
    foreignKey: 'article_Id'
});

module.exports = Article;
