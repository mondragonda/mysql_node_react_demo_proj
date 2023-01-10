import { Sequelize } from 'sequelize';

import { env } from './env.js';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: env.databaseServerConfig.host,
    port: env.databaseServerConfig.port,
    username: env.databaseServerConfig.user,
    password: env.databaseServerConfig.password,
    database: env.databaseName,
})

export { sequelize }