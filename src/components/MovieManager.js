import React, { useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import MovieStatistics from './MovieStatistics';

function MovieManager() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>영화 리뷰 관리</h2>
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} deleteMovie={deleteMovie} />
      <MovieStatistics movies={movies} />
    </div>
  );
}

export default MovieManager;
