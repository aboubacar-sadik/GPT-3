import { footer } from '../../data';
import logo from '../assets/images/GPT-3.png';

function FooterEl({ title, links }) {
	return (
		<div className="flex flex-col gap-4">
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
		<footer className=" bg-light-blue py-16 lg:py-40">
			<div className="container flex items-center flex-col gap-12 lg:gap-20">
				<h2 className="!text-4xl lg:!text-6xl text-center gradient ">
					Voulez-vous vous lancer dans <br /> l'avenir avant les autres ?
				</h2>
				<button className="h-12 border font-bold border-white px-4 text-white text-lg transition-all duration-500 ease-in-out hover:bg-white hover:text-dark">
					Accès anticipé
				</button>
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-40">
					<a href="#">
						<img src={logo} alt="logo" className=" w-28" />
					</a>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-3 gap-16 lg:gap-40">
						{footer.map((obj, i) => (
							<FooterEl key={i} title={obj.title} links={obj.links} />
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
