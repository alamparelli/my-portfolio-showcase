import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	message: {
		type: String,
	},
	subscribed: {
		subscribed: { type: Boolean },
		dateSubscribed: { type: Date },
	},
});

export const Contact = mongoose.model('subscriptions', contactSchema);
