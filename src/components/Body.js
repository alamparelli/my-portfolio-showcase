import { Link } from 'react-router-dom';

export const NavigationBar = () => {
	return (
		<nav className="font-mono left-0 right-0 flex justify-center">
			<div className="p-14 text-lg sm:text-3xl hover:text-gray-600 text-black items-center">
				<Link className="rounded-lg hover:bg-slate-200 font-bold p-3" to="/">
					Profile
				</Link>
				<Link
					className="rounded-lg hover:bg-slate-200 font-bold p-3"
					to="/projects"
				>
					Projects
				</Link>
				<Link
					className="rounded-lg hover:bg-slate-200 font-bold p-3"
					to="/contact"
				>
					Contact Me
				</Link>
			</div>
		</nav>
	);
};

export const Footer = () => {
	return (
		<footer className="font-mono text-xs p-3 bottom-0 left-0 right-0 flex justify-center">
			Copyright &copy; - 2024 - Lamparelli Alessandro
		</footer>
	);
};
