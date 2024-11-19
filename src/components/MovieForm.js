import React from 'react';

function MovieForm({
    title,
    setTitle,
    director,
    setDirector,
    releaseDate,
    setReleaseDate,
    genre,
    setGenre,
    plot,
    setPlot,
    addOrUpdateMovie,
    editIndex
}) {
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
                type="text"
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
