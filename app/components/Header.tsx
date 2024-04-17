"use client";
import { useState } from "react";
import ToggleType from "./ToggleType";
import SearchComponent from "./SearchComponent";
import Navigation from "./Navigation";

export default function Header({ isActive, setIsActive }: any) {
	// const [isActive, setIsActive] = useState(true); Commenting out to put in page.tsx so I can move searchcomponent out of header

	return (
		<div className="bg-blue-700 py-4 px-4 flex justify-between items-center">
			<div className="flex gap-4 items-center">
				<Navigation />
				<h1 className="text-3xl text-gray-200">Expand Your Vocabulary</h1>
			</div>
			<div>
				<ToggleType
					rightText="Thesaurus"
					leftText="Dictionary"
					isActive={isActive}
					setIsActive={setIsActive}
				/>
			</div>
		</div>
	);
}
// when input button for search is clicked... Keep isActive/setActive state in the closest parent component. Also be aware of where we are calling it currently in case we need to restructure.
