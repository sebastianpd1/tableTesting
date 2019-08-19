import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Pivot extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="col-4 offset-4">
					<table className="table table-bordered">
						<thead>
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										store.pivot[0] &&
										Object.keys(store.pivot[0]).map(key => {
											return <td key={key}>{key}</td>;
										})
									);
								}}
							</Context.Consumer>
						</thead>

						<Context.Consumer>
							{({ store, actions }) => {
								return store.pivot.map((item, index1) => {
									return (
										<tr key={index1}>
											{Object.values(store.pivot[index1]).map((item2, index2) => {
												return <td key={index2}>{item2}</td>;
											})}
										</tr>
									);
								});
							}}
						</Context.Consumer>
					</table>
				</div>
			</div>
		);
	}
}
