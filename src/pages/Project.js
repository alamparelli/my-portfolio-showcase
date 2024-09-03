import { Link, useLocation } from 'react-router-dom';

const ProjectTitle = ({ title }) => {
	return (
		<h1 className="pb-5 font-bold text-3xl flex justify-center">{title}</h1>
	);
};

const ProjectImageGalerie = ({ images }) => {
	const imgSel = images.map((image) => (
		<img className="m-2 p-1" src={image} alt="" />
	));
	return (
		<div className="size-full sm:size-auto grid sm:grid-cols-3">
			{images.map((image) => (
				<img className="m-2 p-1" src={image} alt="" />
			))}
		</div>
	);
};

const ProjectDescription = ({ project }) => {
	return (
		<div className="pb-5">
			<h2 className="mb-3">{project.shortDescription}</h2>
			<ul className="indent-0 list-inside list-disc mb-3">
				<li>
					Website :
					<a
						href={project.url}
						target="_blank"
						rel="noreferrer"
						className="text-decoration-line: underline"
					>
						{project.url}
					</a>
				</li>
				<li>
					GitHub repo :
					<a
						href={project.githubPage}
						target="_blank"
						rel="noreferrer"
						className="text-decoration-line: underline"
					>
						{project.githubPage}
					</a>
				</li>
				<li>
					Stacks Used :
					<ul className="indent-5 list-inside list-disc mb-3">
						{project.techStacks.map((t) => (
							<li>{t}</li>
						))}
					</ul>
				</li>
			</ul>
			<p>{project.description}</p>
		</div>
	);
};

export const Project = () => {
	const location = useLocation();
	const project = location.state;
	return (
		<>
			<ProjectTitle title={project.name} />
			<ProjectDescription project={project} />
			<ProjectImageGalerie images={project.images} />
			<Link
				className="rounded-lg font-bold p-3 flex  justify-center"
				to="/projectsgallery"
			>
				Back to Projects
			</Link>
		</>
	);
};
