import React from 'react';

const stylesWatchItem = {
	color: 'red',
};

function toggleBackground(movie){
  return {
		...stylesWatchItem,
    backgroundColor: movie.isDone ? 'cadetblue' : 'darkgoldenrod'
  };
}

function WatchItem({ movie, onToggle }) {
	return (
		<div style={toggleBackground(movie)} onClick={() => onToggle(movie.id)}>
			<p>{movie.title}</p>
		</div>
	);
}

export default WatchItem;
