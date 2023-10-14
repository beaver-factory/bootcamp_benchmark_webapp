import { Client } from 'ts-postgres';

const { DB_USERNAME, DB_PASSWORD, DATABASE } = process.env;

export const databaseConnection = () => {
  const client = new Client({
    host: 'bootcampbpsqlserverstag3.postgres.database.azure.com',
    database: DATABASE,
    user: DB_USERNAME,
    password: DB_PASSWORD,
  });
  return client;
};

const client = databaseConnection();

export default client;

//TODO: look at pooling?
