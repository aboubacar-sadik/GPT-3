import { footer } from '../../data';
import logo from '../assets/images/GPT-3.png';

function FooterEl({ title, links }) {
	return (
		<div className="flex flex-col gap-4 items-center lg:items-start">
			<p className="text-sm font-bold text-white mb-6">{title}</p>
			{links.map((link, i) => (
				<a
					className="text-xs transition-all duration-500 ease-in-out hover:text-red"
					key={i}
					href="#"
				>
					{link}
				</a>
			))}
		</div>
	);
}

export default function Footer() {
	return (
		<footer className=" max-w-8xl m-auto bg-light-blue py-16 ">
			<div className="container flex items-center flex-col gap-12 lg:gap-20">
				<h2 className="!text-4xl lg:!text-6xl text-center gradient ">
					Voulez-vous vous lancer dans <br /> l'avenir avant les autres ?
				</h2>
				<button className="h-12 border font-bold border-white px-4 text-white text-lg transition-all duration-500 ease-in-out hover:bg-white hover:text-dark">
					Accès anticipé
				</button>
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-40">
					<div className="flex flex-col items-center lg:items-start col-span-1  w-full">
						<a href="#">
							<img src={logo} alt="logo" className=" w-28" />
						</a>
						<p className="text-xs text-white mt-4 text-center lg:text-start w-40">
							Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
						</p>
					</div>
					<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-16 lg:gap-40">
						{footer.map((obj, i) => (
							<FooterEl key={i} title={obj.title} links={obj.links} />
						))}
					</div>
				</div>
				<span className="text-xs text-white">
					© 2023 GPT-3. Développé par Aboubacar Sadik. Design by{' '}
					<a className="text-red underline" href="https://www.arshakir.com/">
						Shakir
					</a>
				</span>
			</div>
		</footer>
	);
}
