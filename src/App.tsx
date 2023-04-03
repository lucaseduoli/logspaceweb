import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderComponent from "./components/header";
import Head from "./components/head";
import Collaborate from "./components/collaborate";
import Footer from "./components/footer";
import CaseStudies from "./components/caseStudies";
import Solutions from "./components/solutions";
import ContactUs from "./components/contactUs";
import Router from "./routes";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<Router></Router>
	);
}

export default App;
