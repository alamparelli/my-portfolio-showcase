import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { portfolio } from './portfolio.mjs';
import mongoose from 'mongoose';
import { connectionOption, uri } from './db/database.mjs';
import router from './routes/projects.mjs';

const app = express();
const port = 8080;
const localhost = '127.0.0.1';

app.use(helmet());
app.use(cors());
app.disable('x-powered-by');

app.get('/', (req, res) => {
	res.send('It is working');
});

app.use(router);

mongoose
	.connect(uri, connectionOption)
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.error('MongoDB connection error:', err));

app.listen(port, localhost, () => {
	console.log(`Example app listening on port ${port}`);
});