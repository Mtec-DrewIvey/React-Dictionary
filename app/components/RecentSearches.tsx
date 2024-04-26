import { useEffect, useState } from "react";

export default function RecentSearchesComponent() {
	const [recentSearches, setRecentSearches] = useState<string[]>([]);
	const recentSearchesFromStorage =
		typeof window !== "undefined"
			? localStorage.getItem("recentSearches")
			: null;

	useEffect(() => {
		if (recentSearchesFromStorage) {
			const searches = JSON.parse(recentSearchesFromStorage);
			setRecentSearches(searches);
		}
	}, [recentSearchesFromStorage]);

	return (
		<div className="p-4 m-4 h-48 min-w-fit border border-blue-800 shadow-md shadow-slate-400">
			<h4 className="text-md text-center underline underline-offset-2 decoration-solid italic">
				Recent Searches
			</h4>
			<ul>
				{recentSearches.map((searchWord, index) => (
					<li className="text-md text-left list-disc ml-4" key={index}>
						{searchWord}
					</li>
				))}
			</ul>
		</div>
	);
}
