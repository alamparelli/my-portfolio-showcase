import './output.css';
import { ContactForm } from './pages/Contact';
import Me from './pages/myself';
import { ProjectsGalerie } from './pages/ProjectsGalerie';
import { NavigationBar, Footer } from './components/Body';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Project from './pages/Project';

function App() {
	return (
		<Router className="bg-neutral-200 static">
			<header>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</header>
			<NavigationBar />
			<hr className="pt-7 pb-4"></hr>
			<div className="font-mono px-20 py-5 sm:px-32 lg:px-80">
				<Routes>
					<Route exact path="/contact" element={<ContactForm />} />
					<Route exact path="/" element={<Me />} />
					<Route exact path="/projects" element={<ProjectsGalerie />} />
					<Route exact path="/project" element={<Project />} />
				</Routes>
			</div>
			<hr className="pt-5 pb-7"></hr>
			<Footer />
		</Router>
	);
}

export default App;
