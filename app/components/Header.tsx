"use client";

import Navigation from "./Navigation";

export default function Header() {
	return (
		<div className="flex items-center gap-24 bg-blue-700 py-4 px-4">
			<Navigation />
			<h1 className="text-3xl text-gray-200 text-center">
				Expand Your Vocabulary
			</h1>
		</div>
	);
}
