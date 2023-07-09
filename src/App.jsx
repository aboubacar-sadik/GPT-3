import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import SponsorLogo from './components/SponsorLogo';
import About from './components/About';
import Feature from './components/Feature';
import CaseStudy from './components/CaseStudy';

export default function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<HeroBanner />
				<div className=" pb-16 lg:pb-28">
					<SponsorLogo />
				</div>
				<About />
				<Feature />
				<CaseStudy />
				{/* 
			<CallToAction />
			<Blog />
			<Footer /> */}
			</main>
			<footer></footer>
		</>
	);
}
