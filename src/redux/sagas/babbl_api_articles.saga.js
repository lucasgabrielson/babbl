import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// action.payload should be tickers in a string in the form 'APPL, AMZN, ... etc'

function* fetchApiArticles(action) {
    try {
        console.log( 'fetchApiArticles', action.payload.tickers );
        const response = yield axios.get(`/api/babbl_api_articles/?tickers=${action.payload.tickers}`);
        yield put({ type: 'SET_API_ARTICLES', payload: response.data} )
    } catch (error) {
        console.log('Error getting articles from api', error);
    }
}

function* fetchApiArticlesSaga() {
    yield takeLatest('FETCH_API_ARTICLES', fetchApiArticles);
}

export default fetchApiArticlesSaga;