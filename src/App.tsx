import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
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
