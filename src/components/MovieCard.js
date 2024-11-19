import React from 'react';
import ReviewSection from './ReviewSection';

function MovieCard({
    movie,
    index,
    deleteMovie,
    editMovie,
    toggleReviews,
    addReview,
    selectedMovieIndex,
    setSelectedMovieIndex,
    reviewText,
    setReviewText,
    reviewRating,
    setReviewRating
}) {
    return (
        <div className="movie-card">
            <h4>{movie.title}</h4>
            <p>감독: {movie.director}</p>
            <p>개봉일: {movie.releaseDate}</p>
            <p>장르: {movie.genre}</p>
            <p>평점: ⭐️ {movie.rating.toFixed(1)}</p>
            <p>줄거리: {movie.plot}</p>
            <button onClick={() => deleteMovie(index)}>삭제</button>
            <button onClick={() => editMovie(index)}>수정</button>
            <button onClick={() => toggleReviews(index)}>
                {movie.showReviews ? '리뷰 숨기기' : '리뷰 보기'}
            </button>

            {movie.showReviews && (
                <ReviewSection
                    movie={movie}
                    index={index}
                    addReview={addReview}
                    selectedMovieIndex={selectedMovieIndex}
                    setSelectedMovieIndex={setSelectedMovieIndex}
                    reviewText={reviewText}
                    setReviewText={setReviewText}
                    reviewRating={reviewRating}
                    setReviewRating={setReviewRating}
                />
            )}
        </div>
    );
}

export default MovieCard;
