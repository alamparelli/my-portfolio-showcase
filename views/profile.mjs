import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
	image: {
		type: String,
	},
	socialMedias: {
		type: Array,
	},
	paragraphes: {
		type: Array,
	},
});

export const Profile = mongoose.model('profile', profileSchema);
