export default function NavLinks(props) {
	return (
		<li>
			<a className="navlink" href={props.href} onClick={props.onclick}>
				{props.linkText}
			</a>
		</li>
	);
}
