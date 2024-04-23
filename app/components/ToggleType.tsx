export default function ToggleType({
	leftText,
	rightText,
	isActive,
	setIsActive,
}: {
	leftText: string;
	rightText: string;
	isActive: boolean;
	setIsActive: any;
}) {
	const handleClick = (button: any) => {
		if (
			(button === "dictionary" && !isActive) ||
			(button === "thesaurus" && isActive)
		) {
			setIsActive(!isActive);
		}
	};

	return (
		<div>
			<button
				className={`border border-blue-700 rounded-l-lg p-2 text-white transition duration-700 ease-in-out ${
					isActive ? "bg-blue-500" : "bg-gray-500 opacity-60"
				}`}
				onClick={() => handleClick("dictionary")}
			>
				{leftText}
			</button>
			<button
				className={`border border-blue-700 rounded-r-lg p-2 text-white transition duration-700 ease-in-out ${
					isActive ? "bg-gray-500 opacity-60" : "bg-blue-500"
				}`}
				onClick={() => handleClick("thesaurus")}
			>
				{rightText}
			</button>
		</div>
	);
}
