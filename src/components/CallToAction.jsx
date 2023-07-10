export default function CallToAction() {
	return (
		<section className="gradient container rounded-lg p-10 flex flex-wrap gap-7 items-center justify-between">
			<div>
				<p className=" text-xs  text-dark">Demander un accès anticipé pour commencer</p>
				<p className=" text-2xl text-dark font-extrabold mt-4">
					Inscrivez-vous et explorer les possibilités infinies qui s'offrent à vous.
				</p>
			</div>
			<button className="h-12 bg-dark text-white font-bold text-lg px-6 rounded-3xl">
				Commencer
			</button>
		</section>
	);
}
