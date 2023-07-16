import React, { useState } from 'react';
import './App.css';
import WatchList from './components/WatchList/WatchList';

const initialState = [
	{
		id: 1,
		title: 'Movie 1',
		isDone: false,
	},
	{
		id: 2,
		title: 'Movie 2',
		isDone: false,
	},
	{
		id: 3,
		title: 'Movie 3',
		isDone: false,
	},
	{
		id: 4,
		title: 'Movie 4',
		isDone: false,
	},
];
function App() {
	const [toWatchMovies, setToWatchMovies] = useState(initialState);

	function toggleToWatch(id) {
		const newWatchMovies = toWatchMovies.map((movie) => {
			return movie.id !== id
				? movie
				: { ...movie, isDone: !movie.isDone };
		});
		setToWatchMovies(newWatchMovies);
	}

	return (
		<div className="container">
			<WatchList movies={toWatchMovies} onToggle={toggleToWatch} />
		</div>
	);
}

export default App;
