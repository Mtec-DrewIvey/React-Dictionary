export default function HamburgerMenu({ isOpen }: any) {
	return (
		<>
			<div className="w-6 h-6 flex flex-col flex-nowrap justify-around  cursor-pointer opacity-90">
				<div
					className={`w-4 h-0.5 rounded-sm bg-white origin-top transition-all duration-300 ${
						isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
					}`}
				/>
				<div
					className={`w-4 h-0.5 rounded-sm bg-white origin-top transition-all duration-300 ${
						isOpen ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
					}`}
				/>
				<div
					className={`w-4 h-0.5  rounded-sm bg-white origin-top transition-all duration-300 ${
						isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
					}`}
				/>
			</div>
		</>
	);
}
