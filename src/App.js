import React, { useState } from 'react';
import {nanoid} from 'nanoid';

import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
import initialState from './model/initialState';
import './App.css';


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

	function addNewMovie(movie) {
		movie.id = nanoid(12);
		const newWatchMovies = [...toWatchMovies, movie];
		setToWatchMovies(newWatchMovies);
	}

	return (
		<div className='container'>
			<WatchList movies={toWatchMovies} onToggle={toggleToWatch} />
			<WatchForm onSubmit={addNewMovie} />
		</div>
	);
}

export default App;
