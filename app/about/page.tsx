import Header from "../components/Header";

export default function About() {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center">
				<div className="border border-solid border-blue-700 shadow-md shadow-slate-400 mt-28 max-w-[486px] p-8">
					<div className="text-center">
						<h2 className="text-xl text-bold underline mb-4">About</h2>
					</div>
					<div>
						<p className="text-med ">
							This is a Dictionary and Thesaurus web application that allows
							users to input a word to a search box and choose whether they want
							a definition or synonyms/antonyms. The main page also includes a
							recent searches component that tracks the 5 most recent searches
							using local storage and updates in real time. There is currently
							an unfinished page where I want to implement a Word of the Day
							that uses another API, but there was a setback with getting an API
							Key.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
