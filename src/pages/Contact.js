import { useState } from 'react';

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [subscribed, setSubscribed] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const postAnswer = {
			name: formData.name,
			email: formData.email,
			message: formData.message,
			subscribed: {
				subscribed: subscribed,
				dateSubscribed: new Date(),
			},
		};

		const answer = await fetch('http://localhost:8080/mailing', {
			method: 'POST',
			body: JSON.stringify(postAnswer),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		});
		if (answer.status === 200) {
			setSubmitted(true);
		}

		if (subscribed) {
			setResponseMessage(
				'Thank you for your message and to have subscribed to a future newsletter system!'
			);
		} else {
			setResponseMessage('Thank you for your message !');
		}

		setFormData({
			name: '',
			email: '',
			message: '',
		});
		setSubscribed('');
	};

	return (
		<div>
			{submitted ? (
				<div>
					<h2>{responseMessage}</h2>
					<p>We will have contact with you soon!</p>
				</div>
			) : (
				<div className="p-3 mx-auto max-w-lg bg-white ">
					<h1 className="text-3xl text-gray-800 font-extrabold text-center">
						Get in Touch
					</h1>
					<form className="mt-4 space-y-4" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Name"
							required
							className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
						/>
						<input
							type="email"
							placeholder="Email"
							className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
							name="email"
							required
							value={formData.email}
							onChange={handleInputChange}
						/>
						<textarea
							placeholder="Message"
							rows="6"
							required
							className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
							name="message"
							value={formData.message}
							onChange={handleInputChange}
						></textarea>
						<div className="w-full text-gray-800">
							<input
								type="checkbox"
								id="subscribe"
								name="subscribe"
								value={subscribed}
								onChange={(e) => setSubscribed(e.target.checked)}
							/>
							<span htmlFor="subscribe" className="px-4 pt-3 text-sm">
								Subscribe for more news.
							</span>
						</div>
						<button
							type="submit"
							className="text-white bg-gray-300 hover:bg-gray-400 tracking-wide rounded-md text-sm px-4 py-3 w-full"
						>
							Send
						</button>
					</form>
				</div>
			)}
		</div>
	);
};
