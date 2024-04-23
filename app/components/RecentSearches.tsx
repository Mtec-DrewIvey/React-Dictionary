import { useEffect, useState } from "react";

export default function RecentSearchesComponent() {
	const [recentSearches, setRecentSearches] = useState<string[]>([]);

	useEffect(() => {
		const searches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
		setRecentSearches(searches);
	}, []);

	return (
		<div>
			<h2>Recent Searches</h2>
			<ul>
				{recentSearches.map((search, index) => (
					<li key={index}>{search}</li>
				))}
			</ul>
		</div>
	);
}
