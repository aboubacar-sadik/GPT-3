export default function Button(props) {
	return (
		<button className={`button ${props.class}`} onClick={props.onclick}>
			{props.text}
		</button>
	);
}
