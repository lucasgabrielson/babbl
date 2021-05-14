const userWatchlistReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_WATCHLIST':
            return action.payload;
        default:
            return state;
    }
}


export default userWatchlistReducer;