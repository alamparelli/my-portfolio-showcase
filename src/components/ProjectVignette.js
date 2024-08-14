import { Link } from 'react-router-dom';

export const ProjectVignette = ({ id, img }) => {
	const imgSel = `https://picsum.photos/id/${img}/200`;
	return (
		<div>
			<Link className="rounded-lg" to="/project">
				<img src={imgSel} alt="Project" />
			</Link>
			<div>
				<h3>
					<b>Project {id}</b>
				</h3>
				<p>Name of the project {id}</p>
			</div>
		</div>
	);
};
