import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { connectionOption, uri } from './db/database.mjs';
import routerProjects from './routes/projects.mjs';
import routerSub from './routes/mailing.mjs';
import routerProfile from './routes/profile.mjs';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const limiter = rateLimit({
	// in 1 minute allow 30 Requests for 1 IP
	windowMs: 5 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
});

const limiterContactForm = rateLimit({
	// in 1 minute allow 5 Requests for 1 IP
	windowMs: 60 * 60 * 1000,
	max: 5,
	standardHeaders: true,
	legacyHeaders: false,
});

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.disable('x-powered-by');

app.use(limiterContactForm, routerSub);
app.use(limiter, routerProjects);
app.use(limiter, routerProfile);

app.use(express.static(path.join(__dirname, 'build/')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose
	.connect(uri, connectionOption)
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.error('MongoDB connection error:', err));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
