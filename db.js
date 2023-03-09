
const Sequelize = require('sequelize');
const sequelize = new Sequelize('encurtador_db', 'root', 'admin', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;