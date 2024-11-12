import React from 'react';

function MovieStatistics({ movies }) {
  const totalMovies = movies.length;

  return (
    <div>
      <h3>영화 통계</h3>
      <p>총 영화 편수: {totalMovies}</p>
      {/* 여기에 추가적인 통계 정보 (예: 평균 평점, 총 시청 시간 등) 표시 가능 */}
    </div>
  );
}

export default MovieStatistics;
