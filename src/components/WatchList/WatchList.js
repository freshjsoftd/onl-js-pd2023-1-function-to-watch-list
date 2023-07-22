import React from 'react';
import WatchItem from '../WatchItem/WatchItem';

function WatchList({ movies, onToggle, onDelete }) {
	return (
		<div>
			{movies.map((movie) => {
				return (
					<WatchItem
						key={movie.id}
						movie={movie}
						onToggle={onToggle}
						onDelete={onDelete}
					/>
				);
			})}
		</div>
	);
}

export default WatchList;
