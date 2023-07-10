function Subtitle({ title, description }) {
	return (
		<div className="flex w-full flex-wrap gap-4 items-start  text-white">
			<div className="flex flex-col font-extrabold text-2xl gap-2 lg:w-1/4">
				<span className="gradient w-9 h-1"></span>
				<p className=" text-lg">{title}</p>
			</div>
			<p className="text-sm max-w-lg text-white-blue">{description}</p>
		</div>
	);
}

export default function Feature() {
	return (
		<section className="overflow-hidden relative py-24 lg:pt-40 ">
			<div className="container flex items-start justify-between flex-wrap ">
				<div className="flex flex-wrap items-start justify-between gap-8 lg:w-1/5">
					<h2 className="gradient">
						Entrez dans le futur et faites en sorte qu'il se réalise.
					</h2>
					<p className="text-orange">Demander un accès anticipé</p>
				</div>
				<div className="grid grid-cols-1 lg:w-[70%] gap-8 lg:gap-12">
					<Subtitle
						title="Améliorer instantanément la confiance"
						description="Il n'y a pas d'autre solution que d'aller à la rencontre des gens. Ils vieillissent et dessinent mrs comme. Améliorer la fin se méfie peut instantanément a été ménage applaudi."
					/>
					<Subtitle
						title="Devenir l'actif tendu"
						description="Considéré comme sympathique dix peu communément occasionnel assistance suffisant pas. Lettre de sur devenir il tendait actif permettre."
					/>
					<Subtitle
						title="Message ou rien"
						description="Led demander possible maîtresse relation élégance manger également débattre. Par message ou je ne suis rien parmi principalement adresse."
					/>
					<Subtitle
						title="Vraiment le comté de la loi"
						description="Il n'y a pas d'autre solution que d'aller à l'école et d'aller à l'école, mais il y a une autre solution. Les pieds, c'est comme six. Parmi le sexe sont quitter la loi construit maintenant. Dans la table construite dans un rougissement rapide."
					/>
				</div>
				<span className=" w-[700px] h-[700px] blur-4xl bg-blue-color absolute -left-[700px] "></span>
			</div>
		</section>
	);
}
