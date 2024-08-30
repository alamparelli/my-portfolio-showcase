/* eslint-disable sort-imports */
import express from 'express';
const router = express.Router();
import { Contact } from '../views/mailing.mjs';

router.use(express.json());

const getContact = async (req, res) => {
	try {
		const answer = await Contact.find();
		res.status(200).json(answer);
	} catch (error) {
		res.status(406).send(error);
	}
};

const setContact = async (req, res) => {
	try {
		const answer = await Contact.insertMany(req.body);
		await res.send(answer);
	} catch (error) {
		res.status(406).send(error);
	}
};

router.route('/mailing').get(getContact).post(setContact);

export default router;
