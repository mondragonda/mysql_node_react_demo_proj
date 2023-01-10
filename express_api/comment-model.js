import { sequelize } from './db-connector.js';
import { DataTypes } from 'sequelize';

const Comment = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    text: {
        type: DataTypes.TEXT('long'),
    }
});

(async() => {
    await sequelize.sync();
})()

export {
    Comment
}