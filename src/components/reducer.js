const movieReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [...state.movies, action.payload],
            };
        case 'UPDATE_MOVIE':
            const updatedMovies = [...state.movies];
            updatedMovies[action.payload.index] = {
                ...updatedMovies[action.payload.index],
                ...action.payload.movie,
            };
            return { ...state, movies: updatedMovies, editIndex: null };
        case 'DELETE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((_, index) => index !== action.payload),
            };
        case 'SET_EDIT_INDEX':
            return { ...state, editIndex: action.payload };
        case 'ADD_REVIEW':
            const moviesWithReview = [...state.movies];
            const movieToUpdate = moviesWithReview[action.payload.index];
            movieToUpdate.reviews.push(action.payload.review);
            movieToUpdate.rating =
                movieToUpdate.reviews.reduce((acc, review) => acc + review.rating, 0) /
                movieToUpdate.reviews.length;
            return { ...state, movies: moviesWithReview };
        default:
            return state;
    }
};

export default movieReducer;
