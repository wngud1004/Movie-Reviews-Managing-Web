import React, { useState } from 'react';

function MovieList({ movies, onDeleteMovie, onEditMovie, onAddReview }) {
  const [reviewText, setReviewText] = useState('');

  return (
    <div>
      <h2>영화 목록</h2>
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
          <p>{movie.releaseDate}</p>
          <p>{movie.director}</p>
          <p>{movie.plot}</p> {/* 줄거리 표시 */}
          <button onClick={() => onEditMovie(index)}>수정</button>
          <button onClick={() => onDeleteMovie(index)}>삭제</button>

          {/* 리뷰 입력 및 표시 */}
          <div>
            <input
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="리뷰 입력"
            />
            <button
              onClick={() => {
                onAddReview(index, reviewText);
                setReviewText('');
              }}
            >
              리뷰 추가
            </button>
          </div>

          <h4>리뷰:</h4>
          <ul>
            {movie.reviews.map((review, i) => (
              <li key={i}>{review}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
