import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserWatchlist(action) {
    try {
        console.log( 'fetchUserWatchlist', action.payload );
        const response = yield axios.get(`/api/user_watchlist/${action.payload}`);
        yield put({ type: 'SET_USER_WATCHLIST', payload: response.data} )
    } catch (error) {
        console.log('Error getting user watchlist from database', error);
    }
}

function* addWatchlistArticle(action) {
    try {
        console.log( 'addWatchlistArticle' );
        const response = yield axios.post(`/api/user_watchlist/?id=${action.payload.user_id}&ticker=${action.payload.ticker}`);
        yield put({ type: 'FETCH_USER_WATCHLIST' } )
    } catch (error) {
        console.log('Error adding user watchlist from database', error);
    }
}

function* deleteWatchlistArticle(action) {
    try {
        console.log( 'deleteWatchlistArticle', action.payload.user_id, action.payload.ticker );
        const response = yield axios.delete(`/api/user_watchlist/?id=${action.payload.user_id}&ticker=${action.payload.ticker}`);
        yield put({ type: 'FETCH_USER_WATCHLIST', payload: action.payload.user_id})
    } catch (error) {
        console.log('Error deleting user watchlist from database', error);
    }  
}

function* userWatchlistSaga() {
    yield takeLatest('FETCH_USER_WATCHLIST', fetchUserWatchlist);
    yield takeLatest('ADD_WATCHLIST_ARTICLE', addWatchlistArticle);
    yield takeLatest('DELETE_WATCHLIST_ARTICLE', deleteWatchlistArticle);
}

export default userWatchlistSaga;