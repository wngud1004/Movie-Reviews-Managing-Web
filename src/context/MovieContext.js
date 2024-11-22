import React, { createContext, useState } from 'react';

const MovieContext = createContext();

export function MovieProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [plot, setPlot] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    // 리뷰 관련 상태
    const [reviewText, setReviewText] = useState('');  // 리뷰 텍스트
    const [reviewRating, setReviewRating] = useState(0);  // 리뷰 평점
    const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);

    const editMovie = (index) => {
        setEditIndex(index);
    };

    const toggleReviews = (index) => {
        const updatedMovies = [...movies];
        updatedMovies[index].showReviews = !updatedMovies[index].showReviews;
        setMovies(updatedMovies);
    };

    const deleteMovie = (index) => {
        const updatedMovies = movies.filter((_, i) => i !== index);
        setMovies(updatedMovies);
    };

    const addReview = (index, reviewText, reviewRating) => {
        if (!reviewText.trim() || reviewRating < 1 || reviewRating > 5) {
            alert('리뷰와 평점을 올바르게 입력해주세요.');
            return;
        }
    
        const updatedMovies = [...movies];
        updatedMovies[index].reviews.push({ text: reviewText, rating: reviewRating });
    
        // 평균 평점 계산
        const totalRating = updatedMovies[index].reviews.reduce((sum, review) => sum + review.rating, 0);
        updatedMovies[index].rating = totalRating / updatedMovies[index].reviews.length;
    
        setMovies(updatedMovies);
    };

    const totalReviews = movies.reduce((acc, movie) => acc + movie.reviews.length, 0);

    return (
        <MovieContext.Provider
            value={{
                movies,
                setMovies,
                title,
                setTitle,
                director,
                setDirector,
                releaseDate,
                setReleaseDate,
                genre,
                setGenre,
                toggleReviews,
                plot,
                setPlot,
                editIndex,
                editMovie,
                deleteMovie,
                addReview,
                reviewText,        // 리뷰 텍스트 상태
                setReviewText,     // 리뷰 텍스트 업데이트 함수
                reviewRating,      // 리뷰 평점 상태
                setReviewRating,  // 리뷰 평점 업데이트 함수
                selectedMovieIndex,
                setSelectedMovieIndex,
                totalReviews,
                setEditIndex
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}


export default MovieContext;
