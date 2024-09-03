import { useState, useEffect } from 'react';

const ImageProfile = ({ image }) => {
	return (
		<img
			className="size-full sm:size-auto col-span-full sm:col-span-1 rounded-3xl shadow-2xl bg-white "
			src={image}
			alt="It's Me"
		/>
	);
};

const Bio = ({ paragraphes }) => {
	return (
		<div className="col-span-2 py-5 sm:py-0">
			{paragraphes.map((paragraphe, index) => (
				<p key={index}>{paragraphe}</p>
			))}
		</div>
	);
};

const SocialLinks = ({ media }) => (
	<div className="col-span-2 sm:col-span-3 p-5 flex justify-center">
		<link
			rel="stylesheet"
			href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
		/>
		<div className="grid grid-cols-none gap-4">
			<p className="font-light">Follow me on</p>
			<div className="grid grid-cols-3 gap-4 justify-self-center">
				{media.map((platform, index) => (
					<a
						key={index}
						href={platform.href}
						className={platform.className}
						alt={platform.name}
						target="_blank"
						rel="noreferrer"
					>
						{' '}
					</a>
				))}
			</div>
		</div>
	</div>
);

export const Me = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const queryData = async () => {
			try {
				const query = await fetch('http://localhost:8080/profile');
				if (!query.ok) {
					throw new Error(`Response status: ${query.status}`);
				}
				const json = await query.json();
				setData(json);
			} catch (error) {
				console.error(`Error Fetching Data: ${error}`);
			}
		};

		queryData();
	}, []);

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 mx-0 2xl:mx-60 gap-4">
			<ImageProfile image={data.image} />
			<Bio paragraphes={data.paragraphes} />
			<SocialLinks media={data.socialMedias} />
		</div>
	);
};
