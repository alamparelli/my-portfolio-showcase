import { useEffect, useState } from 'react';
import { ProjectVignette } from '../components/ProjectVignette';
import { Link } from 'react-router-dom';

export const ProjectsGalerie = () => {
	const [loading, setLoading] = useState(true);
	const [projectList, setProjectList] = useState([]);

	const queryData = async () => {
		const query = await fetch('https://public.lamparelli.eu/projects');
		if (!query.ok) {
			throw new Error(`Response status: ${query.status}`);
		}
		const json = await query.json();
		setProjectList(json);
	};

	useEffect(() => {
		if (loading) {
			setProjectList(queryData());
			setLoading(false);
		}
	}, []);

	if (loading) {
		return <p>Loading ... </p>;
	}

	return (
		<div>
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
				{projectList.forEach((element) => {
					<ProjectVignette
						id={element.projectNumber}
						img={element.images[0]}
						name={element.name}
					/>;
				})}
			</div>
		</div>
	);
};
