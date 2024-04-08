"use client";
import { useState } from "react";
import ToggleType from "./ToggleOptions/ToggleType";
import SearchComponent from "./SearchComponent";

export default function Header({ getDictionary, getThesaurus }: any) {
	const [isActive, setIsActive] = useState(true);
	return (
		<div className="bg-blue-700 p-4 flex justify-between items-center">
			<h1 className="text-3xl text-gray-200">Expand Your Vocabulary</h1>
			<SearchComponent
				getDictionary={getDictionary}
				getThesaurus={getThesaurus}
				isActive={isActive}
			/>
			<div>
				<ToggleType
					rightText="Thesaurus"
					leftText="Dictionary"
					isActive={isActive}
					setActive={setIsActive}
				/>
			</div>
		</div>
	);
}
// when input button for search is clicked... Keep isActive/setActive state in the closest parent component. Also be aware of where we are calling it currently in case we need to restructure.
