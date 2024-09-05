import express from 'express';
const router = express.Router();
import { contactForm } from '../controllers/mailing.mjs';
import { body } from 'express-validator';

router.use(express.json());

const scriptCheck = (value) => {
	const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
	if (scriptPattern.test(value)) {
		throw new Error('Field contains potentially malicious content');
	}
	return true;
};

router.route('/mailing').post(
	[
		body('name')
			.trim()
			.notEmpty()
			.withMessage('Message cannot be empty')
			.custom((value) => scriptCheck(value)),
		body('email').isEmail(),
		body('message')
			.trim()
			.notEmpty()
			.withMessage('Message cannot be empty')
			.custom((value) => scriptCheck(value)),
	],
	contactForm
);

export default router;
