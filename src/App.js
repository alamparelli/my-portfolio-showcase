import './output.css';

export const NavigationBar = () => {
	return (
		<nav>
			<ol>
				<li>
					<a href="#">Profile</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<a href="#">Contact Me</a>
				</li>
			</ol>
		</nav>
	);
};

export const Footer = () => {
	return <footer>Copyright &copy - 2024 - Lamparelli Alessandro</footer>;
};

export const ImageProfile = () => {
	return <img src="image.png" alt="It's Me" />;
};

export const Bio = () => {
	return (
		<div>
			<p>
				orem, ipsum dolor sit amet consectetur adipisicing elit. Neque quasi
				possimus distinctio, quisquam asperiores incidunt provident consequuntur
				quibusdam nostrum dolores quia libero! Veritatis distinctio cupiditate
				animi, beatae minus quisquam quibusdam.
			</p>
		</div>
	);
};

export const SocialLinks = () => {
	return (
		<div>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
			<a href="#" class="fa fa-facebook"></a>
			<a href="#" class="fa fa-twitter"></a>
		</div>
	);
};

export const ProjectsGalerie = () => {
	return (
		<div>
			<ProjectVignette id={1} img={156} />
			<ProjectVignette id={2} img={234} />
			<ProjectVignette id={3} img={145} />
			<button>More</button>
		</div>
	);
};

export const ProjectVignette = ({ id, img }) => {
	const imgSel = `https://picsum.photos/id/${img}/200`;
	return (
		<div>
			<img src={imgSel} alt="Project" />
			<div>
				<h4>
					<b>Project {id}</b>
				</h4>
				<p>Name of the project {id}</p>
			</div>
		</div>
	);
};

export const ContactForm = () => {
	const imgSel = `https://picsum.photos/id/42/200`;
	return (
		<div>
			<div>
				<h2>Contact Us</h2>
				<p>Swing by for a cup of coffee, or leave us a message:</p>
			</div>
			<div>
				<div>
					<img src={imgSel} />
				</div>
				<div>
					<form>
						<label htmlFor="fname">First Name</label>
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."
						/>
						<label htmlFor="lname">Last Name</label>
						<input
							type="text"
							id="lname"
							name="lastname"
							placeholder="Your last name.."
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email@exemple.com"
						/>
						<label htmlFor="subject">Subject</label>
						<textarea
							id="subject"
							name="subject"
							placeholder="Write something.."
						></textarea>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export const SubscribeForm = () => {
	return (
		<form>
			<div>
				<h2>Subscribe for News</h2>
				<p>Lorem ipsum..</p>
			</div>
			<div>
				<input type="text" placeholder="Name" name="name" required />
				<input type="text" placeholder="Email address" name="mail" required />
			</div>

			<div>
				<input type="submit" value="Subscribe" />
			</div>
		</form>
	);
};

export const ProjectTitle = () => {
	return (
		<div>
			<p>Project Title</p>
		</div>
	);
};

export const ProjectImageGalerie = () => {
	const imgSel = `https://picsum.photos/id/42/200`;
	return (
		<div>
			<img src={imgSel} alt="" />
		</div>
	);
};

export const ProjectDescription = () => {
	return (
		<div>
			<p>
				orem, ipsum dolor sit amet consectetur adipisicing elit. Neque quasi
				possimus distinctio, quisquam asperiores incidunt provident consequuntur
				quibusdam nostrum dolores quia libero! Veritatis distinctio cupiditate
				animi, beatae minus quisquam quibusdam.
			</p>
		</div>
	);
};

function App() {
	return (
		<div>
			<header></header>
			<body></body>
		</div>
	);
}

export default App;
