import React from 'react';
import WatchItem from '../WatchItem/WatchItem';

function WatchList({ movies, onToggle }) {
	return (
		<>
			{movies.map((movie) => {
				return (
					<WatchItem
						key={movie.id}
						movie={movie}
						onToggle={onToggle}
					/>
				);
			})}
		</>
	);
}

export default WatchList;
