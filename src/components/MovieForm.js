import React, { useState, useEffect } from 'react';

function MovieForm({ onAddMovie, movieToEdit }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [director, setDirector] = useState('');
  const [plot, setPlot] = useState(''); // 줄거리 추가

  useEffect(() => {
    if (movieToEdit) {
      setTitle(movieToEdit.title);
      setGenre(movieToEdit.genre);
      setReleaseDate(movieToEdit.releaseDate);
      setDirector(movieToEdit.director);
      setPlot(movieToEdit.plot); // 줄거리 수정
    }
  }, [movieToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ title, genre, releaseDate, director, plot, reviews: [] });
    setTitle('');
    setGenre('');
    setReleaseDate('');
    setDirector('');
    setPlot('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="영화 제목" />
      <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="장르" />
      <input value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} placeholder="개봉일" />
      <input value={director} onChange={(e) => setDirector(e.target.value)} placeholder="감독" />
      <textarea value={plot} onChange={(e) => setPlot(e.target.value)} placeholder="줄거리" />
      <button type="submit">{movieToEdit ? '수정 완료' : '영화 추가'}</button>
    </form>
  );
}

export default MovieForm;
