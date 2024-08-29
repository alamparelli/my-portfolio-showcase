import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { portfolio } from './portfolio.mjs';

const app = express();
const port = 8080;
const localhost = '127.0.0.1';

app.use(helmet());
app.use(cors());
app.disable('x-powered-by');

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/projects', (req, res) => {
	res.json(portfolio);
});

app.listen(port, localhost, () => {
	console.log(`Example app listening on port ${port}`);
});
