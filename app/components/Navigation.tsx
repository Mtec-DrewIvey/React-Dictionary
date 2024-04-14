import { useState } from "react";
import HamburgerMenu from "./HamburgerNav";
import Link from "next/link";

export default function Navigation() {
	const [hamburgerOpen, setHambuergerOpen] = useState(false);

	const toggleHamburger = () => {
		setHambuergerOpen(!hamburgerOpen);
	};
	return (
		<>
			<ul
				className={`${
					hamburgerOpen
						? "opacity-90 translate-x-4  lg:translate-y-6 md:translate-y-4  xs:translate-y-2 visible"
						: "opacity-0 transition ease duration-300 invisible"
				} h-fit w-fit mt-11 pr-4 py-4 absolute bg-blue-600 transition ease-in-out duration-700 rounded-md`}
			>
				<li className="pl-4 text-white xs:text-sm md:text-md lg:text-lg transition duration-300 hover:scale-105">
					<Link href="/">Home</Link>
				</li>
				<li className="pl-4 text-white xs:text-sm md:text-md lg:text-lg transition duration-300 hover:scale-105">
					<Link href="/wordoftheday">Word of The Day</Link>
				</li>
				<li className="pl-4 text-white xs:text-sm md:text-md lg:text-lg transition duration-300 hover:scale-105">
					<Link href="/about">About</Link>
				</li>
			</ul>
			<div
				onClick={toggleHamburger}
				className={`w-6 h-6 flex flex-col flex-nowrap justify-around cursor-pointer items-center`}
			>
				<HamburgerMenu isOpen={hamburgerOpen} />
			</div>
		</>
	);
}
