export default function Button(props) {
	return (
		<a
			href={props.linkTo}
			onClick={props.onclick}
			target={props.target}
			download={props.download}
		>
			<button className={`button ${props.class}`}>{props.text}</button>
		</a>
	);
}
