import { Link } from 'react-router-dom';

export const ProjectVignette = ({ project, name, img }) => {
	return (
		<div className="p-2">
			<Link to="/project" state={project}>
				<img
					className="rounded-lg shadow-3xl bg-white"
					src={img}
					alt="Project"
				/>
				<p className="font-bold">{name}</p>
			</Link>
		</div>
	);
};
