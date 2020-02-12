const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('poasarticle', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.sync({
  force: false
});

module.exports = sequelize;
