import { useRef, useState } from 'react';
import data from './data';
import Button from './components/Button';
import NavLinks from './components/NavLinks';
import logoIcon from './assets/logo.svg';
import menuIcon from './assets/menu.svg';
import closeIcon from './assets/close.svg';
import FixedItems from './components/FixedItems';

export default function App() {
	const [porfolioData, setPortfolioData] = useState(data);
	const [navOpen, setNavOpen] = useState(false);

	function showMenu() {
		setNavOpen((prev) => !prev);
	}

	return (
		<>
			<header>
				<FixedItems />
				<div className="nav_container">
					<a href="http://localhost:5173/">
						<img className="logo" src={logoIcon} alt="Logo Aboubacar sadik" />
					</a>
					<nav className={`nav_links ${navOpen ? 'show_sidebar' : ''}`}>
						<ul>
							{porfolioData.navlinks.map((link, i) => (
								<NavLinks
									href={link.link}
									linkText={link.linkText}
									key={i}
									onclick={showMenu}
								/>
							))}
							{/* CV MOBILE */}
							<Button class="btn outlined_btn mobile_cv_btn" text="CV" />
						</ul>
						<img
							className="close_icon"
							src={closeIcon}
							alt="icone de fermeture de menu"
							onClick={showMenu}
						/>
					</nav>
					<img
						className="menu_icon"
						src={menuIcon}
						alt="icone pour ouvrir le menu"
						onClick={showMenu}
					/>
					{/* CV DESKTOP */}
					<Button class="btn outlined_btn desktop_cv_btn" text="CV" />
				</div>
				<div className="hero_container">
					<h1 className="name">Aboubacar Sadik</h1>
					<h2 className="job">Développeur Front-End React</h2>
					<div className="hero_btns">
						<Button class="btn outlined_btn" text="About" href="/#about" />
						<Button class="btn filled_btn" text="Contact" href="/#contact" />
					</div>
				</div>
			</header>
			<main></main>
			<footer></footer>
		</>
	);
}
