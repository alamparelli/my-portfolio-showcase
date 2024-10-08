import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';
import { Contact } from '../views/mailing.mjs';

configDotenv();

export const contactForm = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log({ errors: errors.array() });
		return res.status(400).json({ errors: errors.array() });
	}

	const { name, email, message, subscribed } = req.body;
	const answer = await Contact.collection.insertOne(req.body);

	const transporter = nodemailer.createTransport({
		host: process.env.MAILING_HOST,
		secure: true,
		auth: {
			user: process.env.USERNAME_MAIL,
			pass: process.env.PASSWORD_MAIL,
		},
	});

	const mailOptions = {
		from: email,
		to: process.env.TO_MAILBOX,
		subject: `Message from ${name}`,
		text: `${message} \n Has subscribed : ${subscribed.subscribed}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.status(500).send('Error by sending email');
		} else {
			console.log('Email Sent : ' + info.response);
			res.status(200).json({ Mail: 'Email sent', answer });
		}
	});
};
