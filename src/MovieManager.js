import React, { useEffect, useContext } from 'react';
import './MovieManager.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import { MovieProvider } from './context/MovieContext';
import MovieContext from './context/MovieContext';

function MovieManager() {
    // useContext는 컴포넌트 내부에서 호출
    const { movies, setMovies } = useContext(MovieContext);

    // 로컬 스토리지에서 데이터 가져오기
    useEffect(() => {
        const savedMovies = localStorage.getItem('movies');
        if (savedMovies) {
            setMovies(JSON.parse(savedMovies));
        }
    }, [setMovies]);

    // 데이터가 변경될 때 로컬 스토리지에 저장
    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    return (
        <div className="movie-manager">
            <h2>영화 관리 시스템</h2>
            <MovieForm />
            <MovieList />
        </div>
    );
}

export default MovieManager;
