import { configDotenv } from 'dotenv';

configDotenv();

const serverName = process.env.MONGODBSRV;
const userName = process.env.USERNAME;
const password = process.env.PASSWORD;
const appName = process.env.APPNAME;
const dbName = process.env.DBNAME;
export const connectionOption = {
	maxPoolSize: 10,
	retryWrites: true,
	w: 'majority',
	appName: appName,
};

export const uri = `mongodb+srv://${userName}:${password}@${serverName}/${dbName}`;
