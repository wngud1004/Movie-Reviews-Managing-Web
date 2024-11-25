import React, { useContext } from 'react';
import MovieContext from '../context/MovieContext';

const ReviewSection = ({ index }) => {
    const {
        reviewText,
        setReviewText,
        reviewRating,
        setReviewRating,
        addReview, // Context에서 리뷰 추가 함수 가져오기
        movies, // 영화 목록
    } = useContext(MovieContext);

    const movie = movies[index];

    const handleReviewSubmit = () => {
        if (!reviewText?.trim() || reviewRating < 1 || reviewRating > 5) {
            alert("리뷰와 평점을 올바르게 입력해주세요.");
            return;
        }

        // 리뷰 추가
        addReview(index, reviewText, reviewRating);

        // 입력 필드 초기화
        setReviewText('');
        setReviewRating(0);
    };

    return (
        <div>
            {movie.showReviews && (
                <div>
                    <hr />
                    <h4>리뷰 목록:</h4>
                    <p>리뷰 개수: {movie.reviews.length}개</p>

                    {/* 리뷰 입력란 */}
                    <div>
                        <input
                            type="text"
                            placeholder="리뷰 작성"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="리뷰 평점 (1-5)"
                            value={reviewRating}
                            onChange={(e) => setReviewRating(Number(e.target.value))}
                            min="1"
                            max="5"
                        />
                        <button onClick={handleReviewSubmit}>
                            리뷰 추가
                        </button>
                    </div>

                    {/* 리뷰 목록 */}
                    <ul>
                        {movie.reviews.map((review, i) => (
                            <li key={i}>
                                {review.text} - ⭐️ {review.rating}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ReviewSection;
