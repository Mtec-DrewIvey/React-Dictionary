"use client";
import Header from "@/app/components/Header";
import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import { GetDictionary, GetThesaurus } from "./services/DictionaryThesaurus";
import ToggleType from "./components/ToggleType";
import RecentSearchesComponent from "./components/RecentSearches";

export default function Home() {
	const [content, setContent] = useState(<div></div>);
	const [isActive, setIsActive] = useState(true);

	return (
		<>
			<Header />
			<div className="flex justify-center items-center gap-4 my-4">
				<div>
					<SearchComponent
						getDictionary={(word: string) => GetDictionary(word, setContent)}
						getThesaurus={(word: string) => GetThesaurus(word, setContent)}
						isActive={isActive}
					/>
				</div>
				<div className="translate-y-1">
					<ToggleType
						rightText="Thesaurus"
						leftText="Dictionary"
						isActive={isActive}
						setIsActive={setIsActive}
					/>
				</div>
			</div>
			<div className="flex gap-8 mb-12 max-h-[550px]">
				<RecentSearchesComponent />
				{content}
			</div>
		</>
	);
}
