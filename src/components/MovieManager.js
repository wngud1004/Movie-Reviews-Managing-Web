import React, { useState } from 'react';
import './MovieManager.css';

// 최종
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
            alert("모든 필드를 입력해주세요.");
            return;
        }
        const newMovie = { title, director, releaseDate, genre, plot, reviews: [], rating: 0 };
        if (editIndex !== null) {
            const updatedMovies = [...movies];
            updatedMovies[editIndex] = newMovie;
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

    const addReview = (index) => {
        if (!reviewText.trim() || reviewRating < 1 || reviewRating > 5) {
            alert("리뷰와 평점을 올바르게 입력해주세요.");
            return;
        }
        const updatedMovies = [...movies];
        updatedMovies[index].reviews.push({ text: reviewText, rating: reviewRating });
        
        const averageRating = updatedMovies[index].reviews.reduce((acc, review) => acc + review.rating, 0) / updatedMovies[index].reviews.length;
        updatedMovies[index].rating = averageRating;
        
        setMovies(updatedMovies);
        setReviewText('');
        setReviewRating(0);
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
                <textarea
                    type="text"
                    placeholder="줄거리"
                    value={plot}
                    onChange={(e) => setPlot(e.target.value)}
                />
                <button onClick={addOrUpdateMovie}>{editIndex !== null ? '수정 완료' : '영화 추가'}</button>
            </div>

            <div className="movie-list">
                <h3>영화 목록</h3>
                {movies.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <h4>{movie.title}</h4>
                        <p>감독: {movie.director}</p>
                        <p>개봉일: {movie.releaseDate}</p>
                        <p>장르: {movie.genre}</p>
                        <p>평점: ⭐️ {movie.rating.toFixed(1)}</p>
                        <p>줄거리: {movie.plot}</p>
                        <button onClick={() => deleteMovie(index)}>삭제</button>
                        <button onClick={() => editMovie(index)}>수정</button>

                        <hr />
                        <h4>리뷰 목록:</h4>
                        <div>
                            <input
                                type="text"
                                placeholder="리뷰 작성"
                                value={selectedMovieIndex === index ? reviewText : ''}
                                onChange={(e) => setReviewText(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="리뷰 평점 (1-5)"
                                value={selectedMovieIndex === index ? reviewRating : 0}
                                onChange={(e) => setReviewRating(Number(e.target.value))}
                                min="1"
                                max="5"
                            />
                            <button onClick={() => { setSelectedMovieIndex(index); addReview(index); }}>
                                리뷰 추가
                            </button>
                        </div>
                        <ul>
                            {movie.reviews.map((review, i) => (
                                <li key={i}>
                                    {review.text} - ⭐️ {review.rating}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieManager;
