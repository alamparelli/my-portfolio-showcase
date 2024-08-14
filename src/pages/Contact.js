export const ContactForm = () => {
	const imgSel = `https://picsum.photos/id/42/200`;
	return (
		<div>
			<div>
				<h2>Contact Us</h2>
				<p>Swing by for a cup of coffee, or leave us a message:</p>
			</div>
			<div>
				<div>
					<img src={imgSel} />
				</div>
				<div>
					<form>
						<label htmlFor="fname">First Name</label>
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."
						/>
						<label htmlFor="lname">Last Name</label>
						<input
							type="text"
							id="lname"
							name="lastname"
							placeholder="Your last name.."
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email@exemple.com"
						/>
						<label htmlFor="subject">Subject</label>
						<textarea
							id="subject"
							name="subject"
							placeholder="Write something.."
						></textarea>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export const SubscribeForm = () => {
	return (
		<form>
			<div>
				<h2>Subscribe for News</h2>
				<p>Lorem ipsum..</p>
			</div>
			<div>
				<input type="text" placeholder="Name" name="name" required />
				<input type="text" placeholder="Email address" name="mail" required />
			</div>

			<div>
				<input type="submit" value="Subscribe" />
			</div>
		</form>
	);
};
