import mysql2 from 'mysql2';
import { env } from './env.js';

const dbConnection = mysql2.createConnection(env.databaseServerConfig);

dbConnection.query(
    `CREATE DATABASE IF NOT EXISTS ${env.databaseName}`,
    (err, _) => {
        if (err) {
            console.error(err);
            console.log('Database initialization failed.')
            process.exit(1);
        }
        console.log(`database was successfully created.`)
        process.exit(0)
    });