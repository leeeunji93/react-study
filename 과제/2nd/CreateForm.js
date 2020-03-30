import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
	state = {
		input:'',
	}

	handleChange = e => {
		this.setState({
			input : e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onInsert(this.state.input);
		this.setState({
			input:'',
		})
	};

	render() {
		return (
			<div className="CreateForm">
				<form
					className="form_container"
					onSubmit={this.handleSubmit}
				>
					<input
						value={this.state.input}
						placeholder="add a(n) SONG"
						onChange={this.handleChange}
					/>
					<button type="submit">검색</button>
				</form>
			</div>
		);
	}
}

export default CreateForm;
