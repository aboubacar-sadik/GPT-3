import illustrationImage from '../assets/images/Illustration.png';
import Button from './Button';

const users = [
	{ userImage: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg' },
	{ userImage: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg' },
	{ userImage: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg' },
	{ userImage: 'https://xsgames.co/randomusers/assets/avatars/male/4.jpg' },
	{ userImage: 'https://xsgames.co/randomusers/assets/avatars/male/5.jpg' },
];

export default function HeroBanner() {
	return (
		<section className="container flex flex-wrap lg:flex-nowrap items-center py-16 lg:py-28">
			<div className="flex flex-col gap-8 w-full lg:w-1/2">
				<h1 className="gradient">Créons quelque chose de génial avec GPT-3 OpenAI</h1>
				<p className="text-xl">
					Pourtant lit tout pour voyage assistance indulgence déplaisant. Pas pensées tout
					exercice bénédiction. Indulgence façon tout joie altération tapageuse l'attachement.
					Parti nous années à commander permettre demandé de.
				</p>
				<div className="flex items-center justify-center lg:justify-start">
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Votre email"
						className=" placeholder:text-[#3D6184] h-11 rounded-l -mr-2 z-10 lg:w-2/4 px-4 bg-light-blue border-none outline-4 outline-light-blue"
					/>
					<Button>Lancez vous</Button>
				</div>
				<div className="flex flex-wrap items-center gap-4">
					<div className="flex items-center">
						{users.map((user, i) => (
							<img
								key={i}
								src={user.userImage}
								alt="user"
								className=" w-9 h-9 rounded-full border-2 border-white -mr-3"
							/>
						))}
						<span className=" w-9 h-9 rounded-full border-2 border-white -mr-3 text-[8px] flex items-center justify-center text-dark bg-cyan">
							1.6k+
						</span>
					</div>
					<p className="text-xs text-white">
						1 600 personnes ont demandé l'accès à une visite au cours des dernières 24 heures
					</p>
				</div>
			</div>
			<div className="hidden lg:w-1/2 lg:block">
				<img src={illustrationImage} alt="image IA" />
			</div>
		</section>
	);
}
