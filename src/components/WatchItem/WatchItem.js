import React from 'react';
import './WatchItem.css'

const stylesWatchItem = {
	color: 'red',
};

function toggleBackground(movie) {
	return {
		...stylesWatchItem,
		backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod',
	};
}

function WatchItem({ movie, onToggle }) {
	return (
		<div
			className='watch-item'
			style={toggleBackground(movie)}
			onClick={() => onToggle(movie.id)}
		>
			<p className='content'>{movie.title}</p>
			<span className='delete-btn'>
				X
			</span>
		</div>
	);
}

export default WatchItem;
