import { Project } from '../views/project.mjs';
import { portfolio } from '../portfolio.mjs';

// export const getProjects = async (req, res) => {
// 	res.status(200).json(portfolio);
// };

export const getProjects = async (req, res) => {
	try {
		const answer = await Project.find();
		res.status(200).json(answer);
	} catch (error) {
		res.status(406).send(error);
	}
};

export const setProject = async (req, res) => {
	try {
		const answer = await Project.insertMany(req.body);
		await res.send(answer);
	} catch (error) {
		res.status(406).send(error);
	}
};
