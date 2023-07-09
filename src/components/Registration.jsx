import React from 'react';
import Button from './Button';

export default function Registration() {
	return (
		<div className="flex items-center gap-7  text-white text-lg">
			<button className=" transition-all duration-500 ease-in-out hover:text-red ">
				S'inscrire
			</button>
			<Button>Se connecter</Button>
		</div>
	);
}
