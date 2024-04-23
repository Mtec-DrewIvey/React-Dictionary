"use client";

import { useEffect, useState } from "react";

export default function SearchComponent({
	getDictionary,
	getThesaurus,
	isActive,
}: any) {
	const [searchWord, setSearchWord] = useState("");
	const [timer, setTimer] = useState(null);
	const [recentWords, setRecentWord] = useState([]);

	//Debouncer -- set timer to listen to user stop typing before calling API
	useEffect(() => {
		if (timer) {
			clearTimeout(timer);
		}
		if (searchWord) {
			setTimer(
				setTimeout(() => {
					if (isActive) {
						getDictionary(searchWord);
						updateRecentSearches(searchWord);
					} else {
						getThesaurus(searchWord);
						updateRecentSearches(searchWord);
					}
				}, 500) as any
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchWord, isActive]);

	// Set search word for input
	function setWord(event: any) {
		setSearchWord(event.target.value);
	}

	function updateRecentSearches(searchWord: string) {
		let recentSearches: string[] = JSON.parse(
			localStorage.getItem("recentSearches") || "[]"
		);
		recentSearches = recentSearches.filter((word) => word !== searchWord);
		recentSearches.unshift(searchWord);
		localStorage.setItem(
			"recentSearches",
			JSON.stringify(recentSearches.slice(0, 5))
		);
	}

	return (
		<div className="flex justify-center items-center mt-2">
			<input
				type="text"
				placeholder="Enter word here..."
				value={searchWord}
				onChange={setWord}
				className="rounded-md p-2 border border-y-2 border-blue-800 shadow-sm shadow-sky-950"
			/>
		</div>
	);
}
