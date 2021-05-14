import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserWatchlist(action) {
    try {
        console.log( 'fetchUserWatchlist' );
        const response = yield axios.get(`/api/user_watchlist/${action.payload}`);
        yield put({ type: 'SET_USER_WATCHLIST', payload: response.data} )
    } catch (error) {
        console.log('Error getting user watchlist from database', error);
    }
}

function* addWatchlistArticle(action) {
    try {
        console.log( 'addWatchlistArticle' );
        const response = yield axios.post(`/api/user_watchlist/?id=${action.payload.userID}&ticker=${action.payload.ticker}&slug=${action.payload.slug}`);
        yield put({ type: 'FETCH_USER_WATCHLIST' } )
    } catch (error) {
        console.log('Error getting user watchlist from database', error);
    }
}

function* deleteWatchlistArticle(action) {
    try {
        console.log( 'deleteWatchlistArticle' );
        const response = yield axios.delete(`/api/user_watchlist/?id=${action.payload.userID}&slug=${action.payload.slug}`);
        yield put({ type: 'FETCH_USER_WATCHLIST' } )
    } catch (error) {
        console.log('Error getting user watchlist from database', error);
    }  
}

function* userArticlesSaga() {
    yield takeLatest('FETCH_USER_WATCHLIST', fetchUserArticles);
    yield takeLatest('ADD_WATCHLIST_ARTICLE', addUserArticle);
    yield takeLatest('DELETE_WATCHLIST_ARTICLE', deleteUserArticle)
}

export default userArticlesSaga;