import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPopulatedTickers() {
    try {
        console.log( 'fetchPopulatedTickers' );
        const response = yield axios.get(`/api/populated_tickers`);
        yield put({ type: 'SET_POPULATED_TICKERS', payload: response.data} )
    } catch (error) {
        console.log('Error getting populated tickers from api', error);
    }
}

function* populatedTickersSaga() {
    yield takeLatest('FETCH_POPULATED_TICKERS', fetchPopulatedTickers);
}

export default populatedTickersSaga;