"use client";
import Header from "@/app/components/Header";
import { useState } from "react";

export default function Home() {
	const [content, setContent] = useState(<div></div>);

	const options = {
		method: "GET",
		headers: {
			"X-Api-Key": "ck3T3oJerkxpJohbEz7n5w==XtlGJQpWMVMTuUQ9",
		},
	};

	async function GetDictionary(word: string) {
		try {
			const url = "https://api.api-ninjas.com/v1/dictionary?word=" + word;
			const response = await fetch(url, options);
			const result = await response.json();

			setContent(
				<div className="flex justify-center">
					<div className="flex flex-col m-4 p-4 border border-blue-800 shadow-md shadow-slate-400">
						<h3 className="text-xl text-center font-bold italic">
							{result.word.charAt(0).toUpperCase() + result.word.substring(1)}
						</h3>
						<p className="text-left text-md font-medium">{result.definition}</p>
					</div>
				</div>
			);
		} catch (error) {
			console.error(error);
			setContent(
				<div>
					<span>Error Pulling Data</span>
				</div>
			);
		}
	}

	async function GetThesaurus(word: string) {
		try {
			const url = "https://api.api-ninjas.com/v1/thesaurus?word=" + word;
			const response = await fetch(url, options);
			const result = await response.json();

			// Get limited synonyms/antonyms instead of full list
			const limitedSynonyms = result.synonyms.slice(0, 10).join(", ");
			const limitedAntonyms = result.antonyms.slice(0, 10).join(", ");

			setContent(
				<div className="flex justify-center">
					<div className="flex flex-col m-4 p-4 border border-blue-800 shadow-md shadow-slate-400">
						<h3 className="text-xl text-center font-bold italic">
							{result.word.charAt(0).toUpperCase() + result.word.substring(1)}
						</h3>
						<p className="text-left font-medium">
							Synonyms: <span className="font-normal">{limitedSynonyms}</span>
						</p>
						<p className="text-left font-medium">
							Antonyms: <span className="font-normal">{limitedAntonyms}</span>
						</p>
					</div>
				</div>
			);
		} catch (error) {
			console.error(error);
			setContent(
				<div>
					<span>Error Pulling Data</span>
				</div>
			);
		}
	}

	return (
		<>
			<Header getDictionary={GetDictionary} getThesaurus={GetThesaurus} />
			{content}
		</>
	);
}
