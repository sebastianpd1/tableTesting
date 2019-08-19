import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Tabla1 } from "./views/tabla1";
import { Tabla2 } from "./views/tabla2";
import { Tabla3 } from "./views/tabla3";
import { Pivot } from "./views/pivot";
import { All } from "./views/all";
import { Try } from "./views/try";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route path="/" component={Try} />
							<Route path="/tabla1" component={Tabla1} />
							<Route path="/tabla2" component={Tabla2} />
							<Route path="/tabla3" component={Tabla3} />
							<Route path="/pivot" component={Pivot} />
							<Route path="/all" component={All} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
