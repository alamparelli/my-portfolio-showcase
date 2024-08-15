export const ContactForm = () => {
	const imgSel = `https://picsum.photos/id/43/200`;
	return (
		<div>
			<div class="p-3 mx-auto max-w-lg bg-white ">
				<h1 class="text-3xl text-gray-800 font-extrabold text-center">
					Get in Touch
				</h1>
				<form class="mt-4 space-y-4">
					<input
						type="text"
						placeholder="Name"
						required
						class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
					/>
					<input
						type="email"
						placeholder="Email"
						class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
						required
					/>
					<input
						type="text"
						placeholder="Subject"
						class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500"
					/>
					<textarea
						placeholder="Message"
						rows="6"
						required
						class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"
					></textarea>
					<div className="w-full text-gray-800">
						<input type="checkbox" id="subscribe" name="Subscribe" />
						<label htmlFor="subscribe" className="px-4 pt-3 text-sm">
							Subscribe for more news.
						</label>
					</div>
					<button
						type="button"
						class="text-white bg-gray-300 hover:bg-gray-400 tracking-wide rounded-md text-sm px-4 py-3 w-full"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};
