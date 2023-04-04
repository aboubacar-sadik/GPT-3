import Button from './Button';

export default function About(props) {
	return (
		<section id="about">
			<div className="about_wrapper">
				<div className="img_outlined">
					<div className="outlined">
						<img
							className="profile_image"
							src={props.profileImg}
							alt="Photo de Aboubacar Sadik"
						/>
					</div>
				</div>
				<div className="profile_description">
					<h2 className="section_title">{props.aboutTitle}</h2>
					<p className="description">{props.description}</p>
					<Button class="outlined_button" text="Contact" linkTo="#contact" />
				</div>
			</div>
		</section>
	);
}
