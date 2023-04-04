export default function OtherContact(props) {
	return (
		<div className="contact">
			<img className="contact_image" src={props.contactIcon} alt={props.altText} />
			<span className="contact_name">{props.contactName}</span>
			<a href={props.linkTo} className="contact_item">
				{props.contactItem}
			</a>
		</div>
	);
}
