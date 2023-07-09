import possibility from '../assets/images/possibility.png';

export default function CaseStudy() {
	return (
		<section className="container flex items-center flex-wrap gap-8 lg:gap-0 py-20 lg:py-40">
			<div className="lg:w-1/2">
				<img src={possibility} alt="" />
			</div>
			<div className="flex flex-wrap items-start justify-between gap-8 lg:w-1/2">
				<p className=" text-cyan">Demander un accès anticipé pour commencer</p>
				<h2 className="gradient">
					Entrez dans le futur aujourd'hui et faites en sorte qu'il se réalise.
				</h2>
				<p>
					Pourtant lit tout pour voyage assistance indulgence déplaisant. Pas pensées tout
					exercice bénédiction. Indulgence façon tout joie altération tapageuse l'attachement.
					Parti nous années à commander permettre demandé de.
				</p>
				<p className="text-orange">Demander un accès anticipé</p>
			</div>
		</section>
	);
}
