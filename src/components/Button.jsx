export default function Button(props) {
	return (
		<a className={props.class} href={props.href}>
			<span className="text">{props.text}</span>
		</a>
	);
}
