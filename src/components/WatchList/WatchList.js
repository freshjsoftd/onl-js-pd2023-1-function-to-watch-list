import React from 'react';
import WatchItem from '../WatchItem/WatchItem';

function WatchList({ movies, onToggle }) {
	return (
		<div>
			{movies.map((movie) => {
				return (
					<WatchItem
						key={movie.id}
						movie={movie}
						onToggle={onToggle}
					/>
				);
			})}
		</div>
	);
}

export default WatchList;
