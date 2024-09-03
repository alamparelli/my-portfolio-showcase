import express from 'express';
const router = express.Router();
import { contactForm } from '../controllers/mailing.mjs';

router.use(express.json());

router.route('/mailing').post(contactForm);

export default router;
