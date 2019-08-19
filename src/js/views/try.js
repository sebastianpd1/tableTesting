import React from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Try extends React.Component {
	constructor(props) {
		super(props);
		this.qty = React.createRef();
		this.state = {
			objects: {
				item: "",
				quantity: "",
				description: ""
			},
			value: ""
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<form>
								<div className="row form-group">
									<input
										className="form-control"
										type="text"
										onChange={e => {
											this.setState({
												objects: {
													...this.state.objects,
													item: e.target.value
												}
											});
										}}
									/>
								</div>
								<div className="row form-group">
									<input
										className="form-control"
										type="text"
										onChange={e => {
											this.setState({
												objects: {
													...this.state.objects,
													description: e.target.value
												}
											});
										}}
									/>
								</div>
								<div className="row form-group">
									<input
										className="form-control"
										type="text"
										onChange={e => {
											this.setState({
												objects: {
													...this.state.objects,
													quantity: e.target.value
												}
											});
										}}
									/>
								</div>
								<div className="row form-group">
									<input
										type="submit"
										className="btn btn-primary btn-block"
										onClick={() => actions.addToDb(this.state.objects)}
									/>
									<select
										className="form-control m-5"
										onChange={() => {
											if (event.target.value == "table1") {
												actions.addToTable1(this.state.objects);
											} else if (event.target.value == "table2") {
												actions.addToTable2(this.state.objects);
											} else if (event.target.value == "table3") {
												actions.addToTable3(this.state.objects);
											} else if (event.target.value == "pivot") {
												actions.addToPivot(this.state.objects);
											} else {
												this.setState({ value: "nothinSelected" });
											}
										}}>
										<option value="table1">Select Table</option>
										<option value="table1">table1</option>
										<option value="table2">table2</option>
										<option value="table3">table3</option>
										<option value="pivot">pivot</option>
									</select>
								</div>
							</form>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
