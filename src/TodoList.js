import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from "./TodoItem";

class TodoList extends Component {
	render() {
		const {movieLists,handlePlus,handleRemove,handleMinus, handleToggle} = this.props;

		return (
			<div className="PlayLists">
				{movieLists.map((movieList,itemIndex) => {
					return<TodoItem
						key={movieList.id}
						movieList={movieList}
						handlePlus={handlePlus}
						handleMinus={handleMinus }
						handleRemove={handleRemove}
						handleToggle={handleToggle}
						itemIndex={itemIndex}


					/>
				})}
			</div>
		);
	}
}


export default TodoList;

