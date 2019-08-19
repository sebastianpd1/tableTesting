import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">TESTING TABLES</span>
				</Link>
				<div className="ml-auto">
					<Link exact to="/">
						<button className="btn btn-primary mx-2">Inputs</button>
					</Link>
					<Link to="/all">
						<button className="btn btn-primary mx-2">All Tables</button>
					</Link>
					<Link to="/tabla1">
						<button className="btn btn-primary mx-2">Tabla1</button>
					</Link>
					<Link to="/tabla2">
						<button className="btn btn-primary mx-2">Tabla2</button>
					</Link>
					<Link to="/tabla3">
						<button className="btn btn-primary mx-2">Tabla3</button>
					</Link>
					<Link to="/pivot">
						<button className="btn btn-primary mx-2">Pivot</button>
					</Link>
				</div>
			</nav>
		);
	}
}
