import { ProjectVignette } from '../components/ProjectVignette';
import { Link } from 'react-router-dom';

export const ProjectsGalerie = () => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
			<ProjectVignette id={1} img={156} />
			<ProjectVignette id={2} img={234} />
			<ProjectVignette id={3} img={145} />
			<div className="col-span-2 sm:col-span-3 p-5 flex justify-center font-light text-lf">
				<Link
					className="rounded-lg hover:bg-slate-200 font-bold p-3"
					to="/project"
				>
					More
				</Link>
			</div>
		</div>
	);
};
