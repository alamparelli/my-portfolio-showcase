import { Link } from 'react-router-dom';

export const ProjectVignette = ({ id, img, name }) => {
	return (
		<div className="p-2">
			<Link className="rounded-lg" to="/project">
				<img src={img} alt="Project" />
				<p className="font-bold">{name}</p>
			</Link>
		</div>
	);
};
