import React from 'react';
import PropTypes from 'prop-types';
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

WatchList.propTypes = {
	movies: PropTypes.array.isRequired,
	onToggle: PropTypes.func
};

export default WatchList;
