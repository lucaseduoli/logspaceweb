import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderComponent from "./components/header";
import Head from "./components/head";
import Collaborate from "./components/collaborate";
import Footer from "./components/footer";
import CaseStudies from "./components/caseStudies";
import Solutions from "./components/research";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className=" w-full h-full bg-pearl overflow-x-hidden">
			<HeaderComponent />
			<Head />
			<Collaborate />
			<CaseStudies/>
			<Solutions />
			<Footer />
		</div>
	);
}

export default App;
