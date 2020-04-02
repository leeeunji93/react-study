import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {


    render() {
    	const {movieList,handleRemove,handlePlus,handleMinus,itemIndex,handleToggle} =this.props;
        return (
        	<div className={`TodoItem ${movieList.done && 'active'}`}>
				<label>
					<input
					className="check"
					type="checkbox"
					onClick={() => handleToggle(movieList.id)}
					/>

					<div className="text">
						{movieList.text} {movieList.done ? "👩🏻‍💻" : ""}
					</div>
				</label>

					<div
						className="remove"
						onClick=
							{e => {
								e.stopPropagation();
								handleRemove(movieList.id);
							}}
					>
						[x]
					</div>

				<div className="plus"
					 onClick={
						 e => {
							 e.stopPropagation();
							 handlePlus(itemIndex)

						 }}
				>
					[+]
				</div>

					<div
						className="minus"
						onClick={e => {
							e.stopPropagation();
							handleMinus(itemIndex)
						}}
					>
						{movieList.score.toFixed(1)}[-]
					</div>

				</div>




        );
    }
}

export default TodoItem;