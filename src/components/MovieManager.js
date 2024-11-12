// MovieManager.js
import React, { useState } from 'react';
import './MovieManager.css';

function MovieManager() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);

  const addMovie = () => {
    const newMovie = { title, director, releaseDate, genre, rating };
    setMovies([...movies, newMovie]);
    setTitle('');
    setDirector('');
    setReleaseDate('');
    setGenre('');
    setRating(0);
  };

  const deleteMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  return (
    <div className="movie-manager">
      <h1>영화 리뷰 및 펜션 예약 관리 시스템</h1>
      <h2>영화 리뷰 관리</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="영화 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="감독"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <input
          type="text"
          placeholder="개봉일 (YYYY-MM-DD)"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="장르"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="number"
          placeholder="평점 (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button onClick={addMovie}>영화 추가</button>
      </div>

      <div className="movie-list">
        <h3>영화 목록</h3>
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h4>{movie.title}</h4>
            <p>감독: {movie.director}</p>
            <p>개봉일: {movie.releaseDate}</p>
            <p>장르: {movie.genre}</p>
            <p>평점: ⭐️ {movie.rating}</p>
            <button onClick={() => deleteMovie(index)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieManager;
