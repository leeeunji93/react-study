import React, { Component } from 'react';
import './App.css';

import CreateForm from './components/CreateForm';
import Playlist from './components/Playlist';

class App extends Component {
	id = 1;

	state = {
		playlists : [],

	};

	handleInsert = text => {
		const {playlists} = this.state;
		this.setState({
			playlists: playlists.concat({
				text:text,
				id:this.id,
				score:""
				}
			)
		});
		this.id ++
	}

	handleRemove = id => {
		const {playlists} = this.state;
		this.setState({
			playlists:playlists.filter(playlist => playlist.id !== id)
		});
	}

	handlePlus = index => {
		const lists = this.state.playlists;
		const maxCore = 4;
		if(lists[index].score.length > maxCore){
			return
		}
		lists[index].score += "★";
		this.setState({
			playlists:lists

		})

	};

	handleMinus = index => {
		const lists = this.state.playlists;
		lists[index].score  = lists[index].score.slice(undefined,-1);
		this.setState({
			playlists:lists
		})
	};





	render() {
		return (
			<div className="App">
				<h3>Playlist</h3>
				<CreateForm
					onInsert={this.handleInsert}/>
				<Playlist
					playlists={this.state.playlists}
					onRemove={this.handleRemove}
					handlePlus={this.handlePlus}
					handleMinus={this.handleMinus}

				/>

			</div>
		);
	}
}

export default App;
