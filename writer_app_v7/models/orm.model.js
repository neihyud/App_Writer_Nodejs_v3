const { Sequelize, DataTypes } = require('sequelize');

var sequelize = new Sequelize('mydb', 'root', '2458696357', {
    host: 'localhost',
    dialect: 'mysql',
});

var Posts = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Name Doc'
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    }
})

module.exports = Posts