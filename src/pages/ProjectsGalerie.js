import { useEffect, useState, Suspense } from 'react';
import { ProjectVignette } from '../components/ProjectVignette';

export const ProjectsGalerie = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const queryData = async () => {
			try {
				const query = await fetch('http://localhost:8080/projects');
				if (!query.ok) {
					throw new Error(`Response status: ${query.status}`);
				}
				const json = await query.json();
				setData(json);
			} catch (error) {
				throw new Error(`Error Fetching Data: ${error}`);
			}
		};

		queryData();
	}, []);

	function Loading() {
		return <h2>Loading...</h2>;
	}

	const pList = data.map((project) => (
		<ProjectVignette
			key={project.projectNumber}
			img={project.vignette_image}
			name={project.name}
			project={project}
		/>
	));

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 mx-0 2xl:mx-60 gap-4">
			<Suspense fallback={<Loading />}>{pList}</Suspense>
		</div>
	);
};
