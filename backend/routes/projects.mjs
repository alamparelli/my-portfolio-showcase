/* eslint-disable sort-imports */
import express from 'express';
const router = express.Router();

import { getProjects, setProject } from '../controllers/projects.mjs';

router.use(express.json());

router.route('/projects').get(getProjects).post(setProject);

export default router;
