import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name of the Project'],
	},
	projectNumber: {
		type: String,
		required: [true, 'Number of The Project'],
	},
	url: {
		type: String,
		required: [true, 'URL of the website where is hosted this app'],
	},
	githubPage: {
		type: String,
		required: [true, 'GitHub URL'],
	},
	images: {
		type: Array,
		required: [true, 'Image to be published'],
	},
	shortDescription: {
		type: String,
		required: [true, 'A short description for page with list of Projects'],
	},
	description: {
		type: String,
		required: [true, 'A description of the Project'],
	},
	date: {
		type: Date,
		required: [true, 'Date where Project has been published'],
	},
	likes: {
		type: Number,
	},
	techStacks: {
		type: Array,
		required: [true, 'Describe the Tech Stacks Used into an Array'],
	},
});

export const Project = mongoose.model('projects', projectSchema);
