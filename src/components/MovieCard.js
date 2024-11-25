import React, { useContext } from 'react';
import ReviewSection from './ReviewSection';
import MovieContext from '../context/MovieContext';

const MovieCard = ({ movie, index }) => {
    const { deleteMovie, editMovie, toggleReviews } = useContext(MovieContext);

    const handleEditClick = () => {
        editMovie(index); // 수정할 영화의 인덱스를 전달
    };

    return (
        <div className="movie-card">
            <h4>{movie.title}</h4>
            <p>감독: {movie.director}</p>
            <p>개봉일: {movie.releaseDate}</p>
            <p>장르: {movie.genre}</p>
            <p>평점: ⭐️ {movie.rating.toFixed(1)}</p>
            <p>줄거리: {movie.plot}</p>
            <button onClick={() => deleteMovie(index)}>삭제</button>
            <button onClick={handleEditClick}>수정</button>
            <button onClick={() => toggleReviews(index)}>
                {movie.showReviews ? '리뷰 숨기기' : '리뷰 보기'}
            </button>

            {/* 리뷰 섹션 */}
            {movie.showReviews && <ReviewSection movie={movie} index={index} />}
        </div>
    );
};

export default MovieCard;