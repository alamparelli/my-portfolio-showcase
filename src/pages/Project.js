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
		<div className="size-full sm:size-auto grid sm:grid-cols-3">{imgSel}</div>
	);
};

const ProjectDescription = ({ project }) => {
	const tStacks = project.techStacks.map((t) => <li>{t}</li>);

	return (
		<div className="pb-5">
			<h2 className="mb-3">{project.shortDescription}</h2>
			<ul className="indent-0 list-inside list-disc mb-3">
				<li>
					<a href={project.url}>Website : {project.url}</a>
				</li>
				<li>
					<a href={project.githubPage}>GitHub repo : {project.githubPage}</a>
				</li>
				<li>
					Stacks Used :
					<ul className="indent-5 list-inside list-disc mb-3">{tStacks}</ul>
				</li>
			</ul>
			<p>{project.description}</p>
		</div>
	);
};

const Project = () => {
	const location = useLocation();
	const project = location.state;
	return (
		<>
			<ProjectTitle title={project.name} />
			<ProjectDescription project={project} />
			<ProjectImageGalerie images={project.images} />
			<Link
				className="rounded-lg font-bold p-3 flex  justify-center"
				to="/projects"
			>
				Back to Projects
			</Link>
		</>
	);
};

export default Project;
