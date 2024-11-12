import React, { useState } from 'react';

function MovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [director, setDirector] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, genre, releaseDate, director, description });
    setTitle('');
    setGenre('');
    setReleaseDate('');
    setDirector('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
      <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="장르" />
      <input value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} placeholder="개봉일" />
      <input value={director} onChange={(e) => setDirector(e.target.value)} placeholder="감독" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="줄거리" />
      <button type="submit">영화 등록</button>
    </form>
  );
}

export default MovieForm;
