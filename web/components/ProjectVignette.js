import { Link } from 'react-router-dom';

export const ProjectVignette = ({ project, name, img }) => {
	return (
		<div className="p-2">
			<Link className="rounded-lg" to="/project" state={project}>
				<img src={img} alt="Project" />
				<p className="font-bold">{name}</p>
			</Link>
		</div>
	);
};
