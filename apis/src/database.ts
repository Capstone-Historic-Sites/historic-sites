import { createPool, Pool } from 'mysql2/promise';
require('dotenv').config();

export async function connect (): Promise<Pool> {
    const connection = await createPool({
        host: process.env.HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        connectionLimit: 10,
        namedPlaceholders: true
    });
    return connection;
}
