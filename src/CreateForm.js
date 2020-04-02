import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {

	state= {
		input:'',
	};

	handleChange= e => {
		console.log(e.target.value);
		this.setState({
			input: e.target.value
		})

	};

	handleSubmit= e => {
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
						className="form"
						placeholder="Add Movie Name"
						onChange={this.handleChange}
						value={this.state.input}
					/>
					<button
						type="submit"

					>Add</button>
				</form>
			</div>
		);
	}
}

export default CreateForm;
