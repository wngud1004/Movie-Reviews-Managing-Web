import React from 'react';
import MovieCard from './MovieCard';

function MovieList({
    movies,
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
    const totalReviews = movies.reduce((acc, movie) => acc + movie.reviews.length, 0);

    return (
        <div className="movie-list">
            <h3>영화 목록</h3>
            <p>등록된 영화: {movies.length}편, 총 리뷰: {totalReviews}개</p>
            {movies.map((movie, index) => (
                <MovieCard
                    key={index}
                    movie={movie}
                    index={index}
                    deleteMovie={deleteMovie}
                    editMovie={editMovie}
                    toggleReviews={toggleReviews}
                    addReview={addReview}
                    selectedMovieIndex={selectedMovieIndex}
                    setSelectedMovieIndex={setSelectedMovieIndex}
                    reviewText={reviewText}
                    setReviewText={setReviewText}
                    reviewRating={reviewRating}
                    setReviewRating={setReviewRating}
                />
            ))}
        </div>
    );
}

export default MovieList;
