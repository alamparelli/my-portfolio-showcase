import './output.css';
import { ContactForm, SubscribeForm } from './pages/Contact';
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
			<div className="font-mono px-20 py-5 sm:px-32 lg:px-80">
				<Routes>
					<Route
						exact
						path="/contact"
						element={
							<>
								<ContactForm />
								<SubscribeForm />
							</>
						}
					/>
					<Route exact path="/" element={<Me />} />
					<Route exact path="/projects" element={<ProjectsGalerie />} />
					<Route exact path="/project" element={<Project />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
