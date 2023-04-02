import { useState } from 'react';
import data from './data';
import twitterIcon from './assets/twitter-social.svg';
import linkedinIcon from './assets/linkedIn-social.svg';
import githubIcon from './assets/github-social.svg';
import Navbar from './components/Navbar';

export default function App() {
	const [portfolioData, setPortfolioData] = useState(data);

	// DOWNLOAD CV
	return (
		<>
			<header>
				<div className="container nav_el">
					<Navbar
						links={portfolioData.navlinks.map((link, i) => (
							<li key={i} className={`slide_${i + 1}`}>
								<a href={link.link}>{link.linkText}</a>
							</li>
						))}
					/>
				</div>
				<div className="container header_el">
					<h1>Aboubacar Sadik</h1>
					<h2>Développeur Front-End React</h2>
					<div className="header_socials">
						<a href="https://twitter.com/boube_tomess" className="social">
							<img src={twitterIcon} alt="Logo de Twitter" />
						</a>
						<a href="" className="social">
							<img src={linkedinIcon} alt="Logo de LinkedIn" />
						</a>
						<a href="https://github.com/aboubacar-sadik" className="social">
							<img src={githubIcon} alt="Logo de Github" />
						</a>
					</div>
				</div>
			</header>
			<main>
				<div className="container about_container">
					<section id="about"></section>
				</div>
			</main>
			<footer></footer>
		</>
	);
}
