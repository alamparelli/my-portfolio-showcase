/* eslint-disable sort-imports */
import express from 'express';
const router = express.Router();
import { Project } from '../views/project.mjs';

router.use(express.json());

const getProjects = async (req, res) => {
	try {
		const answer = await Project.find();
		res.status(200).json(answer);
	} catch (error) {
		res.status(406).send(error);
	}
};

const setProject = async (req, res) => {
	try {
		const answer = await Project.insertMany(req.body);
		await res.send(answer);
	} catch (error) {
		res.status(406).send(error);
	}
};

router.route('/projects').get(getProjects).post(setProject);

export default router;
