import React, { Component } from 'react';
import './App.css';

import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

class App extends Component {
	id = 1;

	state = {
		movieLists : [
			{
				id:0,
				score:0,
				done:false,
				text:"BOYHOOD"
			},
			{
				id:1,
				score:0,
				done:false,
				text:"Years & Years"

			}

		],

	};

	handleInsert = text => {
		const {movieLists} = this.state;
		this.setState({
			movieLists: movieLists.concat({
					text:text,
					id:this.id,
					score:0,
					done:false

				}
			)
		});
		this.id ++
	}

	handleRemove = id => {
		const {movieLists} = this.state;
		this.setState({
			movieLists:movieLists.filter(movieList => movieList.id !== id)
		})
	};

	handlePlus = index => {
		const lists = this.state.movieLists;
		const maxScore = 9;
		if(lists[index].score > maxScore){
			return
		}
		lists[index].score = lists[index].score + 1.1;
		this.setState({
			movieLists:lists

		})

	};

	handleMinus = index => {
		const lists = this.state.movieLists;
		lists[index].score  = lists[index].score -1.1;
		this.setState({
			movieLists:lists
		})
	};

	handleToggle = id => {
		const {movieLists} =this.state;
		this.setState({
			movieLists:movieLists.map(
				movieList => {
					if (movieList.id === id) {
						return {
							...movieList,
							done:!movieList.done,


						}
					}
					return movieList;

				}
			)
		})

	};





	render() {
		return (
			<div className="App">
				<h3>List of Movies</h3>
				<CreateForm
					onInsert={this.handleInsert}/>
				<TodoList
					movieLists={this.state.movieLists}
					handleRemove={this.handleRemove}
					handlePlus={this.handlePlus}
					handleMinus={this.handleMinus}
					handleToggle={this.handleToggle}

				/>


			</div>
		);
	}
}

export default App;