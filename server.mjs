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

app.use(
	helmet({
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'none'"], // Restrictif par défaut
				connectSrc: [
					"'self'",
					'https://us-central1-blog-88107.cloudfunctions.net',
				],
				styleSrc: ["'self'", 'https://cdnjs.cloudflare.com'],
				styleSrcElem: ["'self'", 'https://cdnjs.cloudflare.com'],
				fontSrc: ["'self'", 'https://cdnjs.cloudflare.com'],
				scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.nonce}'`],
				imgSrc: ["'self'"],
				manifestSrc: ["'self'"],
				objectSrc: ["'none'"],
				baseUri: ["'none'"],
				frameAncestors: ["'none'"],
				formAction: ["'self'"],
				upgradeInsecureRequests: [],
				reportUri: '/csp-violation-report',
			},
			reportOnly: false,
		},
	})
);
app.use(cors());
app.use(limiter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.disable('x-powered-by');

app.use(routerSub);
app.use(routerProjects);
app.use(routerProfile);

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
