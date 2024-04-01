"use client";

import { useEffect, useState } from "react";

export default function SearchComponent({
	getDictionary,
	getThesaurus,
	isActive,
}: any) {
	const [searchWord, setSearchWord] = useState("");
	const [timer, setTimer] = useState(null);

	//Debounce
	useEffect(() => {
		if (timer) {
			clearTimeout(timer);
		}
		if (searchWord) {
			setTimer(
				setTimeout(() => {
					if (isActive) {
						getDictionary(searchWord);
					} else {
						getThesaurus(searchWord);
					}
				}, 500) as any
			);
		}
	}, [searchWord, isActive]);

	function setWord(event: any) {
		setSearchWord(event.target.value);
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Enter word here..."
				value={searchWord}
				onChange={setWord}
			/>
		</div>
	);
}
