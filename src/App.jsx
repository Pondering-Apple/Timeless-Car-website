import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Ferrari from "./components/f40";
import Mclaren from "./components/mclarenf1";
import Aston from "./components/db5";
import Countach from "./components/countach";
import SL300 from "./components/sl300";
import Turbo911 from "./components/turbo911";

const App = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const position = window.scrollY;
			setScrollPosition(position);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<Header scrollPosition={scrollPosition} />
			<Hero />
			<Ferrari />
			<Countach />
			<Aston />
			<Turbo911 />
			<SL300 />
			<Mclaren />
		</div>
	);
};

export default App;
