import arrowIcon from '../assets/arrow-top.svg';
import linkedInFixedIcon from '../assets/linkedIn-social.svg';
import githubFixedIcon from '../assets/github-social.svg';
import twitterFixedIcon from '../assets/twitter-social.svg';

export default function FixedItems() {
	return (
		<div>
			<div className="fixed_to_top_btn">
				<img src={arrowIcon} alt="" />
			</div>
			<div className="fixed_socials">
				<a href="https://linkedin.com/" target="_blank">
					<img src={linkedInFixedIcon} alt="Icone de LinkedIn" />
				</a>
				<a href="https://github.com/aboubacar-sadik" target="_blank">
					<img src={githubFixedIcon} alt="Icone de Github" />
				</a>
				<a href="https://twitter.com/" target="_blank">
					<img src={twitterFixedIcon} alt="Icone de Twitter" />
				</a>
				<div className="social_line"></div>
			</div>
		</div>
	);
}
