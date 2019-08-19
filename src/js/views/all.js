import React from "react";
import "../../styles/home.scss";
import { Tabla1 } from "./tabla1";
import { Tabla2 } from "./tabla2";
import { Tabla3 } from "./tabla3";
import { Pivot } from "./pivot";

export class All extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<Pivot />
					</div>
					<div className="col-6">
						<Tabla1 />
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<Tabla2 />
					</div>
					<div className="col-6">
						<Tabla3 />
					</div>
				</div>
			</div>
		);
	}
}
