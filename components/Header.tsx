"use client";
import ToggleType from "./ToggleOptions/ToggleType";

export default function Header() {
	return (
		<div className="bg-blue-700 p-4 flex justify-between items-center">
			<h1 className="text-3xl text-gray-200">Expand Your Vocabulary</h1>
			<div>
				<ToggleType
					rightText="Thesaurus"
					leftText="Dictionary"
					onClick={() => {
						console.log("clicked");
					}}
				/>
			</div>
		</div>
	);
}
