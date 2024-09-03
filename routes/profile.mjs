import express from 'express';
const router = express.Router();
import { Profile } from '../views/profile.mjs';

router.use(express.json());

const getProfileInfos = async (req, res) => {
	try {
		const answer = await Profile.findOne();
		res.status(200).json(answer);
	} catch (error) {
		res.status(406).send(error);
	}
};

router.route('/profile').get(getProfileInfos);

export default router;
