import logo from '../assets/images/GPT-3.png';
import Registration from './Registration';
import { FaBars } from 'react-icons/fa6';
import 'flowbite';

export default function Navbar() {
	return (
		<nav className="container px-2 w-full">
			<div className="flex flex-wrap items-center mx-auto lg:h-20">
				<a href="#" className="flex items-center mr-20">
					<img src={logo} alt="Logo" />
				</a>
				<div className="flex items-center gap-4 lg:order-2 ml-auto">
					<Registration />
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-white hover:text-dark focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<FaBars />
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
					id="navbar-sticky"
				>
					<ul className="flex lg:items-center flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:bg-transparent lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
						{[
							['Accueil', '#'],
							[`C'est quoi le GPT ?`, '#about'],
							['Open AI', '#1'],
							['Études de cas', '2'],
							['Bibliothèque', '3'],
						].map(([title, url]) => (
							<li key={url}>
								<a
									href={url}
									className="block transition-all duration-500 ease-in-out py-2 pl-3 pr-4 text-dark lg:text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-red lg:p-0"
								>
									{title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
