import React from 'react';

function ReviewSection({
    movie,
    index,
    addReview,
    selectedMovieIndex,
    setSelectedMovieIndex,
    reviewText,
    setReviewText,
    reviewRating,
    setReviewRating
}) {
    return (
        <div>
            <hr />
            <h4>리뷰 목록:</h4>
            <p>리뷰 개수: {movie.reviews.length}개</p>
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
                <button
                    onClick={() => {
                        setSelectedMovieIndex(index);
                        addReview(index);
                    }}
                >
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
    );
}

export default ReviewSection;
