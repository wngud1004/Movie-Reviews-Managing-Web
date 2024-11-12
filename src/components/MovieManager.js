import React, { useState } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function MovieManager() {
  const [movies, setMovies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addMovie = (movie) => {
    if (editIndex !== null) {
      // 수정 모드
      const updatedMovies = [...movies];
      updatedMovies[editIndex] = movie;
      setMovies(updatedMovies);
      setEditIndex(null);
    } else {
      // 새 영화 추가
      setMovies([...movies, movie]);
    }
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const editMovie = (index) => {
    setEditIndex(index);
  };

  const addReview = (index, review) => {
    const updatedMovies = [...movies];
    updatedMovies[index].reviews.push(review);
    setMovies(updatedMovies);
  };

  return (
    <div className="App">
      <h1>영화 리뷰 및 펜션 예약 관리 시스템</h1>
      <MovieForm onAddMovie={addMovie} movieToEdit={movies[editIndex]} />
      <MovieList
        movies={movies}
        onDeleteMovie={deleteMovie}
        onEditMovie={editMovie}
        onAddReview={addReview}
      />
    </div>
  );
}

export default MovieManager;
