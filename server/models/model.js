import sequelize from './db.js';
import {DataTypes} from 'sequelize';

const Users = sequelize.define('users', {
    login: {type: DataTypes.STRING, allowNull: false},
    hashPassword: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER', allowNull: false},
    results: {type: DataTypes.JSON, allowNull: true}
})

const Books = sequelize.define('books', {
    mot: {type: DataTypes.STRING, allowNull: false},
    track: {type: DataTypes.STRING, allowNull: false},
    number: {type: DataTypes.STRING, allowNull: true},
    email: {type: DataTypes.STRING, allowNull: true}
})

export {Users, Books};