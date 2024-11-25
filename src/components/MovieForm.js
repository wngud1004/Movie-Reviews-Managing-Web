import React, { useContext, useState, useEffect } from 'react';
import MovieContext from '../context/MovieContext';

const MovieForm = () => {
    const {
        movies,
        setMovies,
        editIndex,
        setEditIndex
    } = useContext(MovieContext);

    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [plot, setPlot] = useState('');

    const addOrUpdateMovie = () => {
        if (!title || !director || !releaseDate || !genre || !plot) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        const newMovie = { title, director, releaseDate, genre, plot, reviews: [], rating: 0, showReviews: false };

        if (editIndex !== null) {
            // 기존 영화 업데이트
            const updatedMovies = [...movies];
            updatedMovies[editIndex] = { ...updatedMovies[editIndex], title, director, releaseDate, genre, plot }; // 리뷰는 유지하고 나머지만 업데이트
            setMovies(updatedMovies);
            setEditIndex(null); // 수정 완료 후 editIndex 초기화
        } else {
            // 새로운 영화 추가
            setMovies([...movies, newMovie]);
        }

        setTitle('');
        setDirector('');
        setReleaseDate('');
        setGenre('');
        setPlot('');
    };

    useEffect(() => {
        if (editIndex !== null) {
            const movieToEdit = movies[editIndex];
            setTitle(movieToEdit.title);
            setDirector(movieToEdit.director);
            setReleaseDate(movieToEdit.releaseDate);
            setGenre(movieToEdit.genre);
            setPlot(movieToEdit.plot);
        }
    }, [editIndex, movies]);

    return (
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
                placeholder="줄거리"
                value={plot}
                onChange={(e) => setPlot(e.target.value)}
            />
            <button onClick={addOrUpdateMovie}>
                {editIndex !== null ? '수정 완료' : '영화 추가'}
            </button>
        </div>
    );
}

export default MovieForm;
