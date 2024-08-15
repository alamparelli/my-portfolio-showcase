import { ProjectVignette } from '../components/ProjectVignette';
import { Link } from 'react-router-dom';

export const ProjectsGalerie = () => {
	return (
		<div>
			{/* <h1 className="text-2xl text-center pb-4">Random Projects</h1> */}
			<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
				<ProjectVignette id={1} img={156} />
				<ProjectVignette id={2} img={234} />
				<ProjectVignette id={3} img={145} />
				<ProjectVignette id={4} img={655} />
				<ProjectVignette id={5} img={265} />
				<ProjectVignette id={6} img={345} />
				{/* <div className="col-span-2 sm:col-span-3 p-5 flex justify-center font-light text-lf">
					<Link className="rounded-lg font-bold p-3" to="/allprojects">
						All Projects
					</Link>
				</div> */}
			</div>
		</div>
	);
};
