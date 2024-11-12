import React from 'react';

function MovieList({ movies, deleteMovie }) {
  return (
    <div>
      <h3>영화 목록</h3>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>장르</th>
            <th>개봉일</th>
            <th>감독</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.releaseDate}</td>
              <td>{movie.director}</td>
              <td>
                <button onClick={() => deleteMovie(index)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
