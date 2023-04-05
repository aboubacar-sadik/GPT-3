import Button from './Button';

export default function ContactForm(props) {
	return (
		<form onSubmit={props.onsubmit} id="form contact">
			<input
				type="text"
				name="firstName"
				id="firstname"
				placeholder="Prénom"
				value={props.FirstNameValue}
				onChange={props.onchange}
			/>
			<textarea
				cols="30"
				rows="10"
				name="message"
				id="message"
				placeholder="Votre message..."
				value={props.messageValue}
				onChange={props.onchange}
			></textarea>
			<Button text="ENVOYER" />
		</form>
	);
}
