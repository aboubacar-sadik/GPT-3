import React from 'react';

function Subtitle({ title, description }) {
	return (
		<div className="flex w-full flex-wrap gap-4 lg:gap-10 items-start justify-between text-white">
			<div className="flex flex-col font-extrabold text-2xl gap-4">
				<span className="gradient w-9 h-1"></span>
				<p>{title}</p>
			</div>
			<p className=" max-w-2xl text-white-blue">{description}</p>
		</div>
	);
}

export default function About() {
	return (
		<section className=" max-w-8xl m-auto bg-light-blue relative overflow-hidden">
			<div className="container py-16 flex flex-col gap-24  ">
				<div className="flex items-start justify-between w-full">
					<Subtitle
						title={`Qu'est-ce que le GPT-3`}
						description={`Nous avons ainsi opinion amis moi message comme plaisir. Tout l'avant de
						l'assiette a entendu oh ought. Son défectueux ni convaincu résidence propre. La
						connexion a mis impossible propres appartements turbulents. Au jointure ladyship
						an insisted so humanité he. Amicale célibataire entrée à sur par.`}
					/>
				</div>
				<div className="flex items-start justify-between">
					<h2 className="gradient">
						Les possibilités dépassent <br /> l'imagination
					</h2>
					<p className="text-orange">Explorer la bibliothèque</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-11">
					<Subtitle
						title="Chatbots"
						description="Nous avons ainsi opinion amis moi message comme plaisir. Tout l'avant do de la plaque entendu oh ought."
					/>
					<Subtitle
						title="Base de connaissances"
						description="Au jointure ladyship an insisted so humanity he. Amicale entrée célibataire à sur par. Comme mis impossible propres appartements b."
					/>
					<Subtitle
						title="Éducation"
						description="Au jointure ladyship an insisted so humanity he. Amicale entrée célibataire à sur par. Comme mis impossible propres appartements b."
					/>
				</div>
				<div className="absolute w-96 h-80 rounded-full -bottom-1/3 right-[5%] bg-blue-color blur-4xl"></div>
				<div className="absolute w-96 h-80 rounded-full -top-1/2 left-2/5 bg-blue-color blur-3xl"></div>
			</div>
		</section>
	);
}
