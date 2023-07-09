export default function Button({ children }) {
	return (
		<button className=" text-white text-lg border-none transition-all duration-500 ease-in-out hover:bg-rose-700 h-11 rounded bg-red w-40">
			{children}
		</button>
	);
}
