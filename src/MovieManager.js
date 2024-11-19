import React, { useState } from 'react';
import './MovieManager.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function MovieManager() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [plot, setPlot] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState(0);
    const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);

    const addOrUpdateMovie = () => {
        if (!title || !director || !releaseDate || !genre || !plot) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        const newMovie = {
            title,
            director,
            releaseDate,
            genre,
            plot,
            reviews: [],
            rating: 0,
            showReviews: false,
        };

        if (editIndex !== null) {
            const updatedMovies = [...movies];
            updatedMovies[editIndex] = {
                ...updatedMovies[editIndex],
                title,
                director,
                releaseDate,
                genre,
                plot,
            };
            setMovies(updatedMovies);
            setEditIndex(null);
        } else {
            setMovies([...movies, newMovie]);
        }

        setTitle('');
        setDirector('');
        setReleaseDate('');
        setGenre('');
        setPlot('');
    };

    const deleteMovie = (index) => {
        const updatedMovies = movies.filter((_, i) => i !== index);
        setMovies(updatedMovies);
    };

    const editMovie = (index) => {
        const movieToEdit = movies[index];
        setTitle(movieToEdit.title);
        setDirector(movieToEdit.director);
        setReleaseDate(movieToEdit.releaseDate);
        setGenre(movieToEdit.genre);
        setPlot(movieToEdit.plot);
        setEditIndex(index);
    };

    const toggleReviews = (index) => {
        const updatedMovies = [...movies];
        updatedMovies[index].showReviews = !updatedMovies[index].showReviews;
        setMovies(updatedMovies);
    };

    const addReview = (index) => {
        if (!reviewText.trim() || reviewRating < 1 || reviewRating > 5) {
            alert('리뷰와 평점을 올바르게 입력해주세요.');
            return;
        }

        const updatedMovies = [...movies];
        updatedMovies[index].reviews.push({
            text: reviewText,
            rating: reviewRating,
        });

        const totalRating = updatedMovies[index].reviews.reduce(
            (sum, review) => sum + review.rating,
            0
        );
        updatedMovies[index].rating = totalRating / updatedMovies[index].reviews.length;

        setMovies(updatedMovies);
        setReviewText('');
        setReviewRating(0);
    };

    return (
        <div className="movie-manager">
            <h2>영화 관리 시스템</h2>
            <MovieForm
                title={title}
                setTitle={setTitle}
                director={director}
                setDirector={setDirector}
                releaseDate={releaseDate}
                setReleaseDate={setReleaseDate}
                genre={genre}
                setGenre={setGenre}
                plot={plot}
                setPlot={setPlot}
                addOrUpdateMovie={addOrUpdateMovie}
                editIndex={editIndex}
            />
            <MovieList
                movies={movies}
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
        </div>
    );
}

export default MovieManager;
