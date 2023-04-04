import { useState } from 'react';
import data from './data';
import twitterIcon from './assets/twitter-social.svg';
import linkedinIcon from './assets/linkedIn-social.svg';
import githubIcon from './assets/github-social.svg';
import Navbar from './components/Navbar';
import About from './components/About';
import Skill from './components/Skill';
import Button from './components/Button';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import OtherContact from './components/OtherContact';
import Footer from './components/Footer';

export default function App() {
	const [portfolioData, setPortfolioData] = useState(data);
	const [formData, setFormData] = useState({
		firstName: '',
		message: '',
	});

	const handleFormChange = (e) => {
		setFormData((prevData) => {
			return {
				...prevData,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		console.log(formData);
	};

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
						<a href="https://twitter.com/boube_tomess" className="social" target="_blank">
							<img src={twitterIcon} alt="Logo de Twitter" />
						</a>
						<a href="" className="social" target="_blank">
							<img src={linkedinIcon} alt="Logo de LinkedIn" />
						</a>
						<a href="https://github.com/aboubacar-sadik" className="social" target="_blank">
							<img src={githubIcon} alt="Logo de Github" />
						</a>
					</div>
				</div>
			</header>
			<main>
				<div className="container about_container">
					<About
						aboutTitle={portfolioData.aboutItems.sectionTitle}
						profileImg={portfolioData.aboutItems.profilImage}
						description={portfolioData.aboutItems.description}
					/>
				</div>
				<div className="container skill_container">
					<Skill
						skills={portfolioData.skillsItems.skills.map((skill, i) => (
							<div className={`skill ${skill.skillName.toLocaleLowerCase()}`} key={i}>
								<img src={skill.skillIcon} alt={skill.altText} />
								<span>{skill.skillName}</span>
							</div>
						))}
					/>
				</div>
				<div className="container projects_container">
					<Project
						project={portfolioData.projectsItems.projects.map((project, i) => (
							<div className="project_wrapper" key={i}>
								<div
									className="project_image"
									style={{ backgroundImage: `url(${project.projectImage})` }}
								></div>
								<div className="project_detail">
									<span>{`0${i + 1}`}.</span>
									<div className="project_description">
										<h3>{project.projectTitle}</h3>
										<p>{project.projectDescription}</p>
										<div className="tools">
											{project.tools.map((tool, i) => (
												<span key={i}>{tool}</span>
											))}
										</div>
										<div className="project_buttons">
											<Button
												text="Démo"
												class="demo_button"
												linkTo={project.demoLink}
												target="_blank"
											/>
											<a href={project.sourceCodeLink} target="_blank">
												<button className="source_btn">
													<span>Code source</span>
													<svg viewBox="0 0 13 10" height="10px" width="15px">
														<path d="M1,5 L11,5"></path>
														<polyline points="8 1 12 5 8 9"></polyline>
													</svg>
												</button>
											</a>
										</div>
									</div>
								</div>
								<div className="line"></div>
							</div>
						))}
					/>
				</div>
				<div className="container contact_container">
					<div className="contact_wrapper">
						<div className="other_contact">
							{portfolioData.contactItems.socials.map((item, i) => (
								<OtherContact
									key={i}
									contactIcon={item.socialFormIcon}
									altText={item.altText}
									contactName={item.socialFormTitle}
									linkTo={item.linkTo}
									contactItem={item.socialFormText}
								/>
							))}
						</div>
						<ContactForm
							firstNameValue={formData.firstName}
							messageValue={formData.message}
							onchange={handleFormChange}
							onsubmit={handleFormSubmit}
						/>
					</div>
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}
