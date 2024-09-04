import express from 'express';
const router = express.Router();
import { contactForm } from '../controllers/mailing.mjs';
import { body } from 'express-validator';

router.use(express.json());

router
	.route('/mailing')
	.post(
		[
			body('name').isAlphanumeric(),
			body('email').isEmail(),
			body('message').isAlphanumeric(),
		],
		contactForm
	);

export default router;
