import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderComponent from "./components/header";
import Head from "./components/head";
import Products from "./components/products";
import Collaborate from "./components/collaborate";
import Research from "./components/research";
import Company from "./components/company";
import Blog from "./components/blog";
import Footer from "./components/footer";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className=" w-full h-full bg-pearl overflow-x-hidden">
			<HeaderComponent />
			<Head />
			<Collaborate />
			<Research />
			<Footer />
		</div>
	);
}

export default App;
