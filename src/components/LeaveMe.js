import React, { Component } from 'react';

import {
  Prompt
} from 'react-router-dom';

class LeaveMe extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isConfirm: false
		}
	}

	handleChange = (e) => {
		var target	= e.target;
		var name 	= target.name;
		var value	= target.type == 'checkbox' ? target.checked : target.value;

		this.setState({
			[name]: value
		})
	}

	render() {
		return (

			

			<div>
				<Prompt when={ this.state.isConfirm } message={ location => (`Do you want leave?`) } />

				<form onSubmit={ this.handleSubmit }>
					<label>Check ?</label>
					<input onChange={ this.handleChange } value={ this.state.isConfirm } name='isConfirm' type='checkbox' />
				</form>
			</div>
		);
	}

}

export default LeaveMe;