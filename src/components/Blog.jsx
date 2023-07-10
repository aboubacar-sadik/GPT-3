import img from '../assets/images/blog01.png';

export default function Blog({ posts }) {
	return (
		<section className="container flex flex-col gap-16 lg:gap-28 py-16 lg:py-40">
			<h2 className="gradient !text-4xl lg:!text-6xl">
				Il se passe beaucoup de choses, <br /> Nous en parlons sur notre blog.
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
				{posts.map((post) => (
					<article key={post.id} className="flex flex-col">
						<img src={post.image} alt="" className=" max-h-36 object-cover" />
						<div className="flex flex-col items-start justify-between bg-light-blue p-8 h-52">
							<div>
								<span className="text-xs text-white">{post.date}</span>
								<h3 className="text-white mt-3 !text-xl">{post.title}</h3>
							</div>
							<button className="transition-all duration-500 ease-in-out hover:text-red text-white mt-3">
								Lire plus
							</button>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
