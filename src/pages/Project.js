import { Link } from 'react-router-dom';

const ProjectTitle = () => {
	return (
		<div>
			<p className="text-xl font-bold pb-5 flex  justify-center">
				Project Title
			</p>
		</div>
	);
};

const ProjectImageGalerie = () => {
	const imgSel = `https://picsum.photos/id/42/200`;
	return (
		<div className="size-full sm:size-auto">
			<img src={imgSel} alt="" />
		</div>
	);
};

const ProjectDescription = () => {
	return (
		<div className="pb-5">
			<p>
				orem, ipsum dolor sit amet consectetur adipisicing elit. Neque quasi
				possimus distinctio, quisquam asperiores incidunt provident consequuntur
				quibusdam nostrum dolores quia libero! Veritatis distinctio cupiditate
				animi, beatae minus quisquam quibusdam.
			</p>
		</div>
	);
};

const Project = () => {
	return (
		<>
			<ProjectTitle />
			<ProjectDescription />
			<ProjectImageGalerie />
			<Link
				className="rounded-lg hover:bg-slate-200 font-bold p-3 flex  justify-center"
				to="/projects"
			>
				Back to Projects
			</Link>
		</>
	);
};

export default Project;
