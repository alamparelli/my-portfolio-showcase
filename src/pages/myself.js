const ImageProfile = () => {
	const imgSel = `https://picsum.photos/id/354/200`;
	return (
		<img
			className="size-full sm:size-auto col-span-full sm:col-span-1 rounded-3xl shadow-2xl bg-white "
			src={imgSel}
			alt="It's Me"
		/>
	);
};

const Bio = () => {
	return (
		<div className="col-span-2 py-5 sm:py-0">
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quasi
				possimus distinctio, quisquam asperiores incidunt provident consequuntur
				quibusdam nostrum dolores quia libero! Veritatis distinctio cupiditate
				animi, beatae minus quisquam quibusdam.
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quasi
				possimus distinctio, quisquam asperiores incidunt provident consequuntur
				quibusdam nostrum dolores quia libero! Veritatis distinctio cupiditate
				animi, beatae minus quisquam quibusdam.
			</p>
		</div>
	);
};

const SocialLinks = () => {
	return (
		<div className="col-span-2 sm:col-span-3 p-5 flex justify-center">
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
			<div className="grid grid-cols-none gap-4">
				<p className="font-light">Follow me on</p>
				<div className="grid grid-cols-4 gap-4 justify-self-center">
					<a
						href="https://github.com/alamparelli"
						class="fa fa-github"
						alt="GitHub"
					></a>
					<a
						href="https://www.linkedin.com/in/lamparellia/"
						class="fa fa-linkedin"
						alt="Linkedin"
					></a>
					<a
						href="https://x.com/a_lamparelli"
						class="fa fa-twitter"
						alt="X"
					></a>
					<a href="#" class="fa fa-rss" alt="Subscribe"></a>
				</div>
			</div>
		</div>
	);
};

function Me() {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
			<ImageProfile />
			<Bio />
			<SocialLinks />
		</div>
	);
}

export default Me;
