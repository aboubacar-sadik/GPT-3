import { sponsors } from '../../data';

export default function SponsorLogo() {
	return (
		<section className=" container pb-16 lg:pb-28 grid grid-cols-5 items-center m-auto gap-6 lg:gap-11 lg:max-w-4xl">
			{sponsors.map((sponsor, i) => (
				<span key={i}>
					<img src={sponsor.image} alt={sponsor.altText} />
				</span>
			))}
		</section>
	);
}
