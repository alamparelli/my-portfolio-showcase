export const ContactForm = () => {
	return (
		<div>
			<div className="p-3 mx-auto max-w-lg bg-white ">
				<h1 className="text-3xl text-gray-800 font-extrabold text-center">
					Get in Touch
				</h1>
				<form className="mt-4 space-y-4">
					<input
						type="text"
						placeholder="Name"
						required
						className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
						required
					/>
					<input
						type="text"
						placeholder="Subject"
						className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
					/>
					<textarea
						placeholder="Message"
						rows="6"
						required
						className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
					></textarea>
					<div className="w-full text-gray-800">
						<input type="checkbox" id="subscribe" name="Subscribe" />
						<span htmlFor="subscribe" className="px-4 pt-3 text-sm">
							Subscribe for more news.
						</span>
					</div>
					<button
						type="button"
						className="text-white bg-gray-300 hover:bg-gray-400 tracking-wide rounded-md text-sm px-4 py-3 w-full"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};
