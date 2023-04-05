export default function Footer() {
	const copyrightDate = new Date().getFullYear();
	return (
		<div className="container footer_container">
			<p>
				© {copyrightDate} Conçu et développé avec <span>❤</span> par
				<span>Aboubacar Sadik</span>
			</p>
			<span>
				Icons from <a href="https://www.iconfinder.com/icons">iconsfinder.com</a>
			</span>
		</div>
	);
}
