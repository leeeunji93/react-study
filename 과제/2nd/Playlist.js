import React, { Component } from 'react';
import './Playlist.css';
import PlaylistItem from "./PlaylistItem";

class Playlist extends Component {
	render() {
		const {playlists,handlePlus,onRemove,handleMinus} = this.props;

		return (
			<div className="PlayList">
				{playlists.map((playlist,itemIndex) => {
					return<PlaylistItem
						key={playlist.id}
						playlist={playlist}
						handlePlus={handlePlus}
						handleMinus={handleMinus }
						onRemove={onRemove}
						itemIndex={itemIndex}


					/>
				})}
			</div>
		);
	}
}


export default Playlist;
