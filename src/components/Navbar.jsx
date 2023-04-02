import { useState } from 'react';
import logo from '../assets/logo.svg';
import Button from './Button';

export default function Navbar(props) {
	const downloadResume = () => {
		fetch('Portfolio 2.0.pdf').then((response) => {
			response.blob().then((blob) => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Portfolio 2.0.pdf';
				alink.click();
			});
		});
	};

	const [showMenu, setShowMenu] = useState(false);

	const handleShowMenu = () => {
		setShowMenu((prev) => !prev);
		console.log();
	};

	return (
		<nav id="navbar">
			<div className="logo">
				<a href="/#" className="logo">
					<img src={logo} alt="Logo du portfolio de Aboubacar Sadik" />
				</a>
			</div>
			<ul className={`navlinks ${showMenu ? 'show_menu' : ''}`}>
				{props.links}
				<Button class="cv_button cv_mobile slide_5" text="CV" onclick={downloadResume} />
			</ul>
			<Button class="cv_button cv_desktop" text="CV" onclick={downloadResume} />

			<button className={`burger ${showMenu ? 'show' : ''}`} onClick={handleShowMenu}>
				<span className="burger_line"></span>
			</button>
		</nav>
	);
}
