import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import SponsorLogo from './components/SponsorLogo';
import About from './components/About';
import Feature from './components/Feature';
import CaseStudy from './components/CaseStudy';
import CallToAction from './components/CallToAction';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { posts } from '../data';

export default function App() {
	return (
		<>
			<header>
				<Navbar />
				<HeroBanner />
			</header>
			<main>
				<SponsorLogo />
				<About />
				<Feature />
				<CaseStudy />
				<CallToAction />
				<Blog posts={posts} />
			</main>
			<Footer />
		</>
	);
}
