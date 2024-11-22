import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';
import MovieCard from './MovieCard';

function MovieList() {
    const { movies, toggleReviews, totalReviews } = useContext(MovieContext);

    return (
        <div className="movie-list">
            <h3>영화 목록</h3>
            <p>등록된 영화: {movies.length}편, 총 리뷰: {totalReviews}개</p>
            {movies.map((movie, index) => (
                <MovieCard
                    key={index}
                    movie={movie}
                    index={index}
                    toggleReviews={toggleReviews} // toggleReviews 전달
                />
            ))}
        </div>
    );
}

export default MovieList;
