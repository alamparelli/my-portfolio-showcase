import { Link } from 'react-router-dom';

export const NavigationBar = () => {
	return (
		<nav className="font-mono left-0 right-0 flex justify-center">
			<div className="pt-9 pb-5 text-lg sm:text-3xl text-black items-center">
				<Link className="rounded-lg font-bold p-3" to="/">
					About Me |
				</Link>
				<Link className="rounded-lg font-bold p-3" to="/projectsgallery">
					Projects |
				</Link>
				<Link className="rounded-lg  font-bold p-3" to="/contact">
					Contact Me
				</Link>
			</div>
		</nav>
	);
};

export const Footer = () => {
	return (
		<footer className="font-mono text-xs pb-1 bottom-0 left-0 right-0 flex justify-center">
			Copyright &copy; - 2024 - Lamparelli Alessandro
		</footer>
	);
};
