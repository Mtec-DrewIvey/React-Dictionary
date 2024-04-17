"use client";
import Header from "@/app/components/Header";
import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import { GetDictionary, GetThesaurus } from "./services/DictionaryThesaurus";

export default function Home() {
	const [content, setContent] = useState(<div></div>);
	const [isActive, setIsActive] = useState(true);

	return (
		<>
			<Header
				getDictionary={GetDictionary}
				getThesaurus={GetThesaurus}
				isActive={isActive}
				setIsActive={setIsActive}
			/>
			<SearchComponent
				getDictionary={(word: string) => GetDictionary(word, setContent)}
				getThesaurus={(word: string) => GetThesaurus(word, setContent)}
				isActive={isActive}
			/>
			{content}
		</>
	);
}
