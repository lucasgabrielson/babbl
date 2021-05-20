import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* tickers(action) {
    try {
        console.log( 'tickers', action.payload );
        const response = yield axios.get(`/api/tickers/${action.payload.ticker}`);
        yield put({ type: 'SET_TICKERS', payload: response.data} )
    } catch (error) {
        console.log('Error getting tickers from cloud iex api', error);
    }
}

function* tickersSaga() {
    yield takeLatest('FETCH_TICKERS', tickers);
}

export default tickersSaga;