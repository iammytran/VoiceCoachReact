import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import MainFunction from "./components/MainFunction";

function App() {
	return (
		<div>
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={() => <Home />} />
					<Route path="/about" exact component={() => <About />} />
					<Route path="/contact" exact component={() => <Contact />} />
					<Route path="/mainfunction" exact component={() => <MainFunction />} />
				</Switch>
				<Footer />
			</Router>

		</div>
	);
}

export default App;
