import { Link } from 'react-router-dom';

export const ProjectVignette = ({ id, img }) => {
	const imgSel = `https://picsum.photos/id/${img}/200`;
	return (
		<div className="p-2">
			<Link className="rounded-lg" to="/project">
				<img src={imgSel} alt="Project" />
				<p className="font-bold">Project {id}</p>
			</Link>
		</div>
	);
};
