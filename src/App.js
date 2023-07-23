import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import api from './movie-service';
import WatchList from './components/WatchList/WatchList';
import WatchForm from './components/WatchForm/WatchForm';
// import initialState from './model/initialState';
import './App.css';

function App() {
	const [toWatchMovies, setToWatchMovies] = useState([]);

	/* function saveToStorage(movies) {
		localStorage.setItem('movies', JSON.stringify(movies));
	} */

	/* useEffect(() => {
		fetch('http://localhost:5000/watch')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				data ? setToWatchMovies(data) : setToWatchMovies([]);
			});
	}, []); */

	/* useEffect(() => {
		setToWatchMovies(restoreMovies);
	}, []); */

	useEffect(() => {
		api.get('/').then(({ data }) => {
			data ? setToWatchMovies(data) : setToWatchMovies([]);
		});
	}, []);

	/* function restoreMovies(){
		const data = localStorage.getItem('movies');
		return data ? JSON.parse(data) : [];
	} */
	function toggleToWatch(id) {
		const uptatedMovie = toWatchMovies.find((movie) => movie.id === id);
		uptatedMovie.isDone = !uptatedMovie.isDone;
		api.put(`/${id}`, uptatedMovie).then(({ data }) => {
			setToWatchMovies(
				toWatchMovies.map((movie) => (movie.id !== id ? movie : data))
			);
		});
	}

	function deleteMovie(id) {
		api.delete(`/${id}`)
		.then(({status}) => console.log(status))
		.catch((e) => console.log(e));
		const newWatchMovies = toWatchMovies.filter((movie) => movie.id !== id);
		setToWatchMovies(newWatchMovies);
		// saveToStorage(newWatchMovies);
	}

	function addNewMovie(movie) {
		movie.id = nanoid(12);
		api.post('/', movie).then(({ data }) => {
			const newWatchMovies = [...toWatchMovies, data];
			setToWatchMovies(newWatchMovies);
		});
		// saveToStorage(newWatchMovies);
	}

	return (
		<div className='container'>
			<WatchList
				movies={toWatchMovies}
				onToggle={toggleToWatch}
				onDelete={deleteMovie}
			/>
			<WatchForm onSubmit={addNewMovie} />
		</div>
	);
}

export default App;
