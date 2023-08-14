const Sequelize = require('sequelize');
const sequelize = new Sequelize('userdata', 'root', 'Kolhapur@64', {
  dialect: 'mysql',
  host: 'localhost',
  
});
module.exports=sequelize
     