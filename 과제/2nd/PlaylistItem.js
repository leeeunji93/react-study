import React, { Component } from 'react';
import './PlaylistItem.css';

class PlaylistItem extends Component {


	render() {
		const {playlist,onRemove,handlePlus,handleMinus,itemIndex} = this.props;
		return (
			<div className="TodoItem">
				<div
					className="remove"
					onClick={e => {
						e.stopPropagation();
						onRemove(playlist.id);
					}}
				>
					[X]
				</div>
				<div
					className="plus"
					onClick={e => {
						e.stopPropagation();
						handlePlus(itemIndex)}}
				>
					[+]
				</div>
				<div
					className="minus"
					onClick={e => {
						e.stopPropagation();
						handleMinus (itemIndex)}}
				>
					{playlist.score}[-]
				</div>


				<div className="text">{playlist.text}</div>
			</div>
		);
	}
}

export default PlaylistItem;
